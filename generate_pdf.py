"""Build the stable PDF from the same content.json used by the website."""
from pathlib import Path
import json
from PIL import Image
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor
from reportlab.platypus import Paragraph
from reportlab.lib.styles import ParagraphStyle
from xml.sax.saxutils import escape
ROOT=Path(__file__).resolve().parent
PALETTE=['#EADFF1','#E1EDF2','#F7E1DC','#E6EDD9'];INK='#493849';W,H=595.28,841.89

def build_pdf():
 topics=json.loads((ROOT/'content.json').read_text());out=ROOT/'Aanyas-kunskapsbok.pdf';c=canvas.Canvas(str(out),pagesize=(W,H));c.setTitle('Aanyas kunskapsbok');c.setAuthor('Aanya');c.setSubject('Ljusare färglagda bildtolkningar av Aanyas anteckningsbok')
 def tx(x,y,s,size=12,font='Helvetica'):
  c.setFillColor(HexColor(INK));c.setFont(font,size);c.drawString(x,y,s.replace('–','-'))
 def center(y,s,size=12,font='Helvetica'):
  c.setFillColor(HexColor(INK));c.setFont(font,size);c.drawCentredString(W/2,y,s)
 def bg(i,lines=False):
  c.setFillColor(HexColor('#FFFCF7'));c.rect(0,0,W,H,fill=1,stroke=0);c.setFillColor(HexColor(PALETTE[i%4]));c.circle(W-30,H-30,100,fill=1,stroke=0);c.circle(0,0,75,fill=1,stroke=0)
  if lines:
   c.setStrokeColor(HexColor('#E7E5E7'));c.setLineWidth(.4)
   for y in range(88,700,27):c.line(37,y,W-37,y)
   c.setStrokeColor(HexColor('#E9D7DF'));c.line(55,77,55,711)
 def image(path,x,y,w,h):
  path=Path(path);im=Image.open(path);iw,ih=im.size;r=min(w/iw,h/ih);aw,ah=iw*r,ih*r;c.drawImage(str(path),x+(w-aw)/2,y+(h-ah)/2,aw,ah)
 def paragraph(text,x,y,width,size=12,leading=18,color=INK,bold=False):
  style=ParagraphStyle('p',fontName='Helvetica-Bold' if bold else 'Helvetica',fontSize=size,leading=leading,textColor=HexColor(color))
  p=Paragraph(escape(text).replace('–','-'),style);_,height=p.wrap(width,H);p.drawOn(c,x,y-height);return y-height
 def footer(num):tx(38,31,'Aanyas kunskapsbok',9);tx(W-58,31,str(num),9)
 bg(0);center(757,'ORD OCH ORIGINALTECKNINGAR AV AANYA',10,'Helvetica-Bold');center(694,'Aanyas',45,'Helvetica-Bold');center(639,'kunskapsbok',45,'Helvetica-Bold');center(596,'Ett litet museum av stora och små upptäckter',13)
 image(ROOT/'assets/sketch-2231.jpg',158,250,280,310);center(204,'Djur, natur, platser, sagor och min vardag',14,'Helvetica-Bold');center(173,f'{len(topics)} ämnen ur min egen anteckningsbok',12);center(100,'Mina ord. Mina teckningar. Min nyfikenhet.',11);c.showPage()
 contents_pages=(len(topics)+15)//16
 for chunk in range(contents_pages):
  bg(1);tx(43,766,'Bläddra i min kunskapsbok',27,'Helvetica-Bold');tx(43,738,'Mina handskrivna sidor i en ljusare, färglagd bildtolkning.',10)
  for i in range(chunk*16,min((chunk+1)*16,len(topics))):
   t=topics[i];y=690-(i%16)*35;n=2+contents_pages+i;tx(48,y,f'{i+1:02d}',11,'Helvetica-Bold');tx(88,y,t['title'],13,'Helvetica-Bold');tx(88,y-15,t['category'],9);tx(515,y,str(n),11);c.linkRect('',f'topic-{t["id"]}',(40,y-20,550,y+15),relative=0,thickness=0)
  tx(43,62,'Färger och ljus har förbättrats. Originalbilderna finns på webbplatsen.',9);tx(43,45,'Framtidsfantasier är tydligt märkta som fantasi.',9);c.showPage()
 for i,t in enumerate(topics):
  num=2+contents_pages+i;bg(i);c.bookmarkPage(f'topic-{t["id"]}');c.addOutlineEntry(t['title'],f'topic-{t["id"]}',0,False)
  tx(30,802,f'{i+1:02d} / {t["category"].upper()}',9,'Helvetica-Bold');tx(30,776,t['title'],20,'Helvetica-Bold')
  image(ROOT/t['notebook'],22,72,W-44,684)
  if t.get('imagination'):paragraph('2045 och 2050: Aanyas framtidsfantasi, inte etablerade fakta.',30,63,535,9,12)
  footer(num);c.showPage()
 bg(3);center(626,'Fortsätt undra.',32,'Helvetica-Bold');center(578,'Fortsätt rita.',29,'Helvetica-Bold');center(530,'Fortsätt upptäcka.',29,'Helvetica-Bold');center(421,'Nästa upptäckt börjar på en tom sida.',12);center(339,'Texter och originalteckningar av Aanya',11);center(316,'Ljusare papper, varsam färgläggning och pastellramar.',9);center(288,'Färgsidorna är AI-bearbetade bildtolkningar av mina originalsidor.',9);c.save();return out
if __name__=='__main__':print(build_pdf())
