#!/usr/bin/env python3
"""Create six original, text-free, vector-first JPMD website scenes and 1920x1080 WebP exports."""
from pathlib import Path
import random, math, io
import cairosvg
from PIL import Image, ImageOps, ImageDraw
BASE=Path(__file__).resolve().parents[1]/'public'/'images'
OUT=BASE/'backgrounds'; OUT.mkdir(parents=True,exist_ok=True)
random.seed(37)
W,H=1920,1080
HEADER='''<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1920 1080" width="1920" height="1080">
<defs>
<linearGradient id="sky" x2=".78" y2="1"><stop stop-color="#020711"/><stop offset=".48" stop-color="#11233b"/><stop offset="1" stop-color="#02060b"/></linearGradient>
<radialGradient id="sun"><stop stop-color="#e6aa58" stop-opacity=".5"/><stop offset=".3" stop-color="#c78a3e" stop-opacity=".18"/><stop offset="1" stop-color="#c78a3e" stop-opacity="0"/></radialGradient>
<radialGradient id="blue"><stop stop-color="#5dc7ff" stop-opacity=".42"/><stop offset=".35" stop-color="#2c7ed9" stop-opacity=".13"/><stop offset="1" stop-color="#2c7ed9" stop-opacity="0"/></radialGradient>
<linearGradient id="metal" x1="0" x2="1" y1="0" y2="1"><stop stop-color="#3d2410"/><stop offset=".2" stop-color="#e0a855"/><stop offset=".34" stop-color="#fff1c0"/><stop offset=".47" stop-color="#b46e2c"/><stop offset=".62" stop-color="#f1c87e"/><stop offset=".8" stop-color="#5b3516"/><stop offset="1" stop-color="#e4ad63"/></linearGradient>
<linearGradient id="floor" x2="0" y2="1"><stop stop-color="#0c1627"/><stop offset="1" stop-color="#02060b"/></linearGradient>
<linearGradient id="darkMetal" x1="0" x2="1" y1="0" y2="1"><stop stop-color="#09131f"/><stop offset=".3" stop-color="#1a3042"/><stop offset=".6" stop-color="#050910"/><stop offset="1" stop-color="#284252"/></linearGradient>
<filter id="glow"><feGaussianBlur stdDeviation="11"/></filter>
<filter id="soft"><feGaussianBlur stdDeviation="35"/></filter>
<pattern id="grain" width="9" height="9" patternUnits="userSpaceOnUse"><circle cx="3" cy="2" r=".35" fill="#ffffff" opacity=".14"/><circle cx="7" cy="8" r=".35" fill="#dcaf74" opacity=".12"/></pattern>
<pattern id="grid" width="82" height="82" patternUnits="userSpaceOnUse"><path d="M 82 0 L 0 0 0 82" fill="none" stroke="#5f9cb8" stroke-opacity=".12" stroke-width="1"/></pattern>
</defs><rect width="1920" height="1080" fill="url(#sky)"/><rect width="1920" height="1080" fill="url(#grain)"/>
'''
END='</svg>'
def dotstars(num=130):
 random.seed(18+num);p=[]
 for i in range(num):
  x=random.randrange(700,W);y=random.randrange(25,730);r=random.choice([.7,1,1.4,2]);o=random.uniform(.16,.65)
  p.append(f'<circle cx="{x}" cy="{y}" r="{r}" fill="{random.choice(["#e8bd78","#6eaffc","#ffffff"])}" opacity="{o:.2f}"/>')
 return ''.join(p)
def eth(x,y,k=1,color='#84ceff'):
 top=(x,y-115*k); mid=(x,y+20*k); bottom=(x,y+158*k)
 return f'''<g stroke="{color}" stroke-width="{3*k}" stroke-opacity=".78" stroke-linejoin="round"><path d="M {x} {y-115*k} L {x-94*k} {y+20*k} L {x} {y-17*k}Z" fill="#356d9a"/><path d="M {x} {y-115*k} L {x+94*k} {y+20*k} L {x} {y-17*k}Z" fill="#9be7ff"/><path d="M {x-94*k} {y+38*k} L {x} {y+158*k} L {x} {y+62*k}Z" fill="#1d466e"/><path d="M {x+94*k} {y+38*k} L {x} {y+158*k} L {x} {y+62*k}Z" fill="#59b6ff"/></g>'''
def skyline(ybase=870, nr=37, offset=0):
 random.seed(999+offset);p=['<g opacity=".9">'];x=0
 for i in range(nr):
  width=random.randint(32,100);hei=random.randint(170,620);y=ybase-hei
  color=random.choice(['#0b1723','#10233a','#122334','#1b2431'])
  p.append(f'<path d="M{x} {ybase}V{y}H{x+width}V{ybase}Z" fill="{color}" stroke="#c39259" stroke-opacity=".20"/>')
  for wy in range(int(y+25),int(ybase-20),28):
   for wx in range(int(x+12),int(x+width-10),16):
    if random.random()<.47: p.append(f'<rect x="{wx}" y="{wy}" width="3" height="8" fill="{random.choice(["#8ebad2","#cf974e","#e1c48b"])}" opacity="{random.choice([.16,.30,.48,.72])}"/>')
  x+=width+random.randint(1,6)
 p.append('</g>');return ''.join(p)
def orbit(cx,cy,rx,ry,n=5):
 s=[]
 for i in range(n):
  a=-11+i*7;s.append(f'<ellipse cx="{cx}" cy="{cy}" rx="{rx-i*7}" ry="{ry+i*5}" transform="rotate({a} {cx} {cy})" stroke="{random.choice(["#f6c575","#4db9ee"])}" stroke-opacity=".27" fill="none" stroke-width="2"/>')
 return ''.join(s)
def coin(cx,cy,r):
 s=f'<circle cx="{cx}" cy="{cy}" r="{r+55}" fill="url(#sun)"/><circle cx="{cx}" cy="{cy}" r="{r+14}" fill="none" stroke="#d89f54" stroke-width="3" opacity=".48" filter="url(#glow)"/>'
 s+=f'<circle cx="{cx}" cy="{cy}" r="{r}" fill="#20130a" stroke="url(#metal)" stroke-width="26"/><circle cx="{cx}" cy="{cy}" r="{r-25}" fill="url(#darkMetal)" stroke="#e4b978" stroke-width="4"/>'
 for i in range(68):
  a=i*2*math.pi/68;x=cx+(r-43)*math.cos(a);y=cy+(r-43)*math.sin(a)
  s+=f'<circle cx="{x:.1f}" cy="{y:.1f}" r="2.2" fill="#daa864" opacity=".55"/>'
 s+=eth(cx,cy-12,r/270, '#eec477')
 return s
def arcs():
 s=[];random.seed(22)
 for i in range(20):
  x1=random.randint(640,1800);y1=random.randint(350,920);x2=random.randint(850,1920);y2=random.randint(330,800);midy=min(y1,y2)-random.randint(80,300)
  s+= [f'<path d="M{x1} {y1} Q{(x1+x2)//2} {midy} {x2} {y2}" fill="none" stroke="{random.choice(["#e9b967","#5ec1ff"])}" stroke-opacity=".5" stroke-width="{random.choice([1,2,3])}"/>',f'<circle cx="{x1}" cy="{y1}" r="3" fill="#f2b76c"/>']
 return ''.join(s)
def render(name,parts):
 art=HEADER + ''.join(parts) + '<rect width="1920" height="1080" fill="url(#grain)" opacity=".7"/>' + END
 svg=OUT/(name+'.svg');svg.write_text(art,encoding='utf-8')
 raw=cairosvg.svg2png(bytestring=art.encode(), output_width=W,output_height=H)
 im=Image.open(io.BytesIO(raw)).convert('RGB');im.save(OUT/(name+'.webp'),format='WEBP',quality=88,method=6)
 print(name,(OUT/(name+'.webp')).stat().st_size)

# 01: skyline financial district, glowing bullion medallion and solar streaks, broad negative space at left.
render('scene-1',[
 '<ellipse cx="1450" cy="555" rx="760" ry="620" fill="url(#sun)"/>',dotstars(130),skyline(1025,35,1),
 '<path d="M0 935 L1920 936" stroke="#bd8e4b" opacity=".5"/><path d="M0 945H1920V1080H0Z" fill="url(#floor)"/>',
 *[f'<path d="M 0 {960+i*23} H1920" stroke="#b68c51" stroke-opacity=".13"/>' for i in range(7)],
 coin(1415,470,265),orbit(1430,475,490,215,6),
 '<path d="M 800 740 C 1110 570 1360 910 1900 565" stroke="#f9d798" stroke-width="5" stroke-opacity=".72" fill="none"/>',
 '<path d="M 800 740 C 1110 570 1360 910 1900 565" stroke="#ffad48" stroke-width="25" stroke-opacity=".32" fill="none" filter="url(#glow)"/>',
 '<rect width="990" height="1080" fill="url(#sky)" opacity=".38"/>'
])
# 02: structural stone columns transform into glowing Ethereum network.
columns=[]
for i in range(8):
 x=750+i*145; y=220+(i%3)*25
 columns.extend([f'<path d="M{x-34} 935 L{x-40} {y+110} L{x+40} {y+110} L{x+34} 935Z" fill="url(#darkMetal)" stroke="#99774f" stroke-opacity=".5" stroke-width="5"/>',f'<rect x="{x-59}" y="{y+95}" width="118" height="29" fill="url(#metal)" opacity=".48"/>',f'<rect x="{x-55}" y="927" width="110" height="33" fill="url(#metal)" opacity=".38"/>'])
render('scene-2',['<ellipse cx="1390" cy="560" rx="700" ry="500" fill="url(#blue)"/>',dotstars(140),skyline(920,34,3),'<path d="M640 270L1920 120V975H640Z" fill="#091623" opacity=".3"/>',''.join(columns),'<path d="M620 265 L1830 265 L1920 335 L620 335Z" fill="url(#metal)" opacity=".45"/>',eth(1470,440,1.05),orbit(1480,480,360,240),arcs(),'<path d="M0 970H1920V1080H0Z" fill="#030811"/>'])
# 03: massive metallic vault, secure hardware look with generic ethereum-shaped gem, no writing.
render('scene-3',['<ellipse cx="1460" cy="520" rx="800" ry="680" fill="url(#sun)"/>',
 '<rect x="860" y="80" width="1030" height="980" rx="46" fill="url(#darkMetal)" stroke="url(#metal)" stroke-width="21"/>',
 *[f'<rect x="{x}" y="{y}" width="22" height="22" rx="3" fill="url(#metal)" opacity=".65"/>' for x in range(912,1840,105) for y in [125,1010]],
 '<circle cx="1390" cy="548" r="440" fill="#070e15" stroke="url(#metal)" stroke-width="45"/>',
 *[f'<circle cx="1390" cy="548" r="{r}" fill="none" stroke="{c}" stroke-width="{w}" opacity="{o}"/>' for r,c,w,o in [(405,'#f0ca7e',4,.8),(365,'#a46d30',25,.5),(330,'#eac187',5,.7),(282,'#5a8daf',4,.5),(250,'#bd945d',13,.5)]],
 *[f'<line x1="1390" y1="{548-r}" x2="1390" y2="{548-r+48}" stroke="#dfae69" stroke-width="9" transform="rotate({a} 1390 548)"/>' for a in range(0,360,30) for r in [340]],
 '<circle cx="1390" cy="548" r="220" fill="#081726" stroke="#d5a668" stroke-width="7"/>','<circle cx="1390" cy="548" r="290" fill="url(#blue)"/>', eth(1390,540,1.2),
 '<path d="M600 1000L1920 1000" stroke="#b38952" stroke-opacity=".65" stroke-width="5"/>'
])
# 04: trading desk with crisp monitor frames and decorative demo chart shapes no fake market data.
mon=[]
for idx,(x,y,w,h) in enumerate([(890,275,480,390),(1390,220,455,400),(1030,695,550,230)]):
 mon.extend([f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="11" fill="#030912" stroke="url(#metal)" stroke-width="12"/>',f'<rect x="{x+17}" y="{y+18}" width="{w-34}" height="{h-38}" fill="#07192a"/>'])
 for i in range(8):mon.append(f'<path d="M{x+17} {y+55+i*(h-100)/8:.1f}H{x+w-17}" stroke="#3d7089" stroke-opacity=".28"/>')
 random.seed(idx+92)
 points=[]
 for j in range(22):
  xx=x+25+j*(w-50)/21;yy=y+h*.70-j*(h*.32)/21+random.uniform(-h*.18,h*.18)
  points.append((xx,yy))
 for j,(xx,yy) in enumerate(points):
  hh=random.randint(20,72); col='#efbd69' if j%3 else '#64bee7'
  mon.append(f'<line x1="{xx:.1f}" y1="{yy-hh/2:.1f}" x2="{xx:.1f}" y2="{yy+hh/2:.1f}" stroke="{col}" stroke-width="3" opacity=".65"/>')
 mon.append('<path d="'+' '.join(('M' if j==0 else 'L')+f'{xx:.1f},{yy:.1f}' for j,(xx,yy) in enumerate(points))+f'" fill="none" stroke="#81d4f3" stroke-width="4" stroke-opacity=".9"/>')
render('scene-4',['<ellipse cx="1380" cy="450" rx="820" ry="660" fill="url(#blue)"/>','<rect x="720" y="60" width="1200" height="1020" fill="url(#grid)"/>',''.join(mon),'<path d="M680 880H1920V1080H680Z" fill="#0b131d" stroke="#91683e" stroke-width="5"/>','<path d="M700 910L1920 910" stroke="#cc995b" stroke-opacity=".55"/>',*[f'<path d="M{800+i*155} 930 l-60 150" stroke="#5b86a0" opacity=".19"/>' for i in range(10)]])
# 05: planet from linework, linked over geography-like dotted clouds.
planet=['<ellipse cx="1380" cy="870" rx="740" ry="670" fill="#091e31" stroke="#77c9fb" stroke-width="10"/>', '<ellipse cx="1380" cy="870" rx="820" ry="740" fill="url(#blue)"/>']
for i in range(1,11):
 xx=720+i*115
 planet.append(f'<path d="M{xx} 290 C{xx-450} 720 {xx-350} 990 {xx} 1080" stroke="#6db6da" stroke-opacity=".19" fill="none" stroke-width="2"/>')
for i in range(1,10):
 yy=390+i*65
 planet.append(f'<ellipse cx="1380" cy="{yy+450}" rx="730" ry="{110+i*15}" stroke="#75bcdf" stroke-opacity=".19" fill="none"/>')
random.seed(391)
for i in range(240):
 x=random.gauss(1380,360);y=random.gauss(820,235)
 if ((x-1380)/700)**2+((y-870)/600)**2<.95:
  planet.append(f'<circle cx="{x:.1f}" cy="{y:.1f}" r="{random.choice([1.8,2.8,4.5])}" fill="{random.choice(["#fac273","#6dcafa"])}" opacity="{random.uniform(.3,.85):.2f}"/>')
render('scene-5',[dotstars(150),'<ellipse cx="1410" cy="750" rx="1100" ry="770" fill="url(#blue)"/>']+planet+[arcs(),'<path d="M0 1030H1920V1080H0Z" fill="#02070d"/>'])
# 06: abstract columns and orbital technology motif for FAQ, image no text.
render('scene-6',[dotstars(120),'<ellipse cx="1510" cy="520" rx="760" ry="660" fill="url(#sun)"/>',
 *[f'<rect x="{790+i*130}" y="{170+(i%3)*55}" width="64" height="720" rx="8" fill="url(#darkMetal)" stroke="#cfaf79" stroke-opacity=".42" stroke-width="2"/>' for i in range(9)],
 '<circle cx="1470" cy="525" r="310" fill="#081525" stroke="url(#metal)" stroke-width="7" opacity=".94"/>',
 orbit(1470,520,400,240,6),eth(1470,510,1.05),
 '<path d="M650 985H1920" stroke="#deac65" opacity=".55"/>'])
# NEW branded transparent icon, abstract Ethereum-inspired compass on a metallic coin, not bank-affiliated graphics.
logo=f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="1024" height="1024"><defs><radialGradient id="lg"><stop stop-color="#2f3643"/><stop offset=".76" stop-color="#080f1a"/><stop offset="1" stop-color="#111924"/></radialGradient><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#925c29"/><stop offset=".25" stop-color="#ffe09b"/><stop offset=".5" stop-color="#a36a2e"/><stop offset=".75" stop-color="#f2c378"/><stop offset="1" stop-color="#885326"/></linearGradient></defs><circle cx="512" cy="512" r="486" fill="url(#lg)" stroke="url(#g)" stroke-width="45"/><circle cx="512" cy="512" r="414" fill="none" stroke="#dfab65" stroke-width="8"/><circle cx="512" cy="512" r="364" fill="none" stroke="#e9c283" stroke-width="3" opacity=".65"/>'''+eth(512,444,1.62,'#e9c080')+'''<g fill="#e8b56d"><circle cx="255" cy="730" r="12"/><circle cx="769" cy="730" r="12"/><circle cx="512" cy="815" r="9"/></g></svg>'''
(BASE/'logo-original.svg').write_text(logo,encoding='utf-8')
png=cairosvg.svg2png(bytestring=logo.encode(),output_width=1024,output_height=1024)
Image.open(io.BytesIO(png)).save(BASE/'logo-original.png')
# favicon from the original icon
im=Image.open(BASE/'logo-original.png').convert('RGBA'); im.resize((64,64),Image.Resampling.LANCZOS).save(BASE/'favicon.png')
print('Assets exported to',OUT)
