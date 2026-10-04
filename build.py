"""One command rebuilds the PDF, self-contained preview and hosting ZIP."""
from pathlib import Path
import base64,json,zipfile
from generate_pdf import build_pdf
ROOT=Path(__file__).resolve().parent

def main():
 topics=json.loads((ROOT/'content.json').read_text())
 assert len({t['id'] for t in topics})==len(topics),'Topic IDs must be unique'
 for t in topics:
  for k in ('src','original','notebook'):
   if t.get(k):assert (ROOT/t[k]).is_file(),f'Missing {t[k]}'
 build_pdf()
 page=(ROOT/'index.html').read_text();page=page.replace('<link rel="stylesheet" href="styles.css">','<style>'+(ROOT/'styles.css').read_text()+'</style>')
 page=page.replace('<script src="app.js"></script>','<script>window.AANYA_CONTENT='+json.dumps(topics,ensure_ascii=False).replace('</','<\\/')+';</script><script>'+(ROOT/'app.js').read_text()+'</script>')
 paths={t[k] for t in topics for k in ('src','original','notebook') if t.get(k)}
 for name in sorted(paths,key=len,reverse=True):
  encoded='data:image/jpeg;base64,'+base64.b64encode((ROOT/name).read_bytes()).decode();page=page.replace(name,encoded)
 pdf_b64=base64.b64encode((ROOT/'Aanyas-kunskapsbok.pdf').read_bytes()).decode()
 page=page.replace('<script>window.AANYA_CONTENT=', '<script>window.AANYA_PDF="'+pdf_b64+'";window.AANYA_CONTENT=')
 standalone=ROOT.parent/'Aanyas-Notebook.html';standalone.write_text(page)
 include={'index.html','styles.css','app.js','content.json','Aanyas-kunskapsbok.pdf','build.py','generate_pdf.py','requirements.txt','README.md','.nojekyll','topic-template.json'}
 archive=ROOT.parent/'Aanyas-Notebook-Website.zip'
 with zipfile.ZipFile(archive,'w',zipfile.ZIP_DEFLATED) as z:
  for name in sorted(include):z.write(ROOT/name,name)
  for name in sorted(paths):z.write(ROOT/name,name)
 print('Built:',standalone,archive,'from',len(topics),'shared topics')
if __name__=='__main__':main()
