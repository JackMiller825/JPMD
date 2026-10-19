#!/usr/bin/env python3
from PIL import Image, ImageDraw, ImageFont, ImageFilter
from pathlib import Path
P=Path(__file__).resolve().parents[1]/'public/images'
serif='/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf'
sans='/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'

def build(w,h,name):
 src=Image.open(P/'backgrounds/scene-1.webp').convert('RGB')
 ratio=max(w/src.width,h/src.height); size=(int(src.width*ratio),int(src.height*ratio))
 src=src.resize(size,Image.Resampling.LANCZOS)
 x=(src.width-w)//2; y=max(0,int((src.height-h)*.28)); base=src.crop((x,y,x+w,y+h)).convert('RGBA')
 shade=Image.new('RGBA',(w,h)); px=shade.load()
 for yy in range(h):
  for xx in range(w):
   a=int(248*(1-xx/w)**1.4)
   px[xx,yy]=(1,5,12,max(0,min(255,a)))
 base=Image.alpha_composite(base,shade)
 d=ImageDraw.Draw(base); scale=w/1500
 logo=Image.open(P/'logo-original.png').convert('RGBA'); ls=int(84*scale);logo=logo.resize((ls,ls),Image.Resampling.LANCZOS)
 base.alpha_composite(logo,(int(80*scale),int(53*scale)))
 d=ImageDraw.Draw(base)
 f0=ImageFont.truetype(serif,int(102*scale))
 f1=ImageFont.truetype(sans,int(46*scale))
 f2=ImageFont.truetype(sans,int(19*scale))
 d.text((int(80*scale),int(166*scale)),"JPM COIN",font=f0,fill='#f9d79a',stroke_width=max(1,int(2*scale)),stroke_fill='#281609')
 d.text((int(88*scale),int(294*scale)),"$JPMD",font=f1,fill='#f4bd65',stroke_width=max(1,int(1*scale)),stroke_fill='#4a2b10')
 d.line((int(90*scale),int(360*scale),int(560*scale),int(360*scale)),fill='#d5a76b',width=max(1,int(2*scale)))
 d.text((int(90*scale),int(382*scale)),"THE MONEY NEVER SLEEPS.",font=f2,fill='#e5e9e9')
 d.text((int(90*scale),int(417*scale)),"INDEPENDENT ETHEREUM MEME · NOT BANK-AFFILIATED",font=ImageFont.truetype(sans,int(11*scale)),fill='#b7c5ce')
 base.convert('RGB').save(P/name,'WEBP',quality=90,method=6)

build(1500,500,'social-banner.webp')
build(1100,520,'telegram-banner.webp')
