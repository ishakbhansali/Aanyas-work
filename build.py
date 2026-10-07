"""Rebuild the stable Swedish PDF and package all five website pages."""
from pathlib import Path
import json,zipfile,argparse
from generate_pdf import build_pdf
ROOT=Path(__file__).resolve().parent

def main():
 parser=argparse.ArgumentParser()
 parser.add_argument('--keep-pdf',action='store_true',help='Keep the current coloured book for website-only updates')
 args=parser.parse_args()
 topics=json.loads((ROOT/'content.json').read_text())
 assert len({t['id'] for t in topics})==len(topics),'Topic IDs must be unique'
 for name in ('index.html','knowledge.html','comics.html','about.html','gallery.html','gallery.js','gallery.css','gallery-data.json','i18n.js','app.js','styles.css','language.css'):
  assert (ROOT/name).is_file(),f'Missing {name}'
 for t in topics:
  assert t.get('en'),f'Missing English translation for {t["id"]}'
  assert len(t['facts'])==len(t['en']['facts']),f'Incomplete English facts for {t["id"]}'
  for key in ('src','original','notebook'):
   if t.get(key):assert (ROOT/t[key]).is_file(),f'Missing {t[key]}'
 if not args.keep_pdf:build_pdf()
 out=ROOT.parent/'output';out.mkdir(exist_ok=True)
 archive=out/'Aanyas-Little-World-FINAL.zip'
 with zipfile.ZipFile(archive,'w',zipfile.ZIP_DEFLATED) as z:
  for path in sorted(ROOT.rglob('*')):
   if path.is_file() and '__pycache__' not in path.parts:z.write(path,path.relative_to(ROOT).as_posix())
 print('Built:',archive,'with five website pages and',len(topics),'shared knowledge topics')
 print('Preview locally: python -m http.server 8000, then open http://localhost:8000')
if __name__=='__main__':main()
