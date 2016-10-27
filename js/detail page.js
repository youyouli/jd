// JavaScript Document
function detail1(){
	var Product=document.getElementsByClassName('product')[0];
	var Top=Product.getElementsByClassName('top')[0];
	var arr=['电脑、办公 >','电脑配件 >','机箱 >','爱国者（aigo） >','爱国者黑骑士D8中塔式机箱']
	for(var i=0;i<arr.length;i++){
		var P=document.createElement('p');
		P.innerHTML=arr[i];
		Top.appendChild(P);
	}
}
//放大镜+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function detail2(){
	var Product=document.getElementsByClassName('product')[0];
	var Bigpic=Product.getElementsByClassName('bigpic')[0];
	var More=Product.getElementsByClassName('more')[0];
	var Ul=More.getElementsByTagName('ul')[0];
	var arr=["<img src='images/nomal1.jpg'/>",
			"<img src='images/nomal2.jpg'/>",
			"<img src='images/nomal3.jpg'/>",
			"<img src='images/nomal4.jpg'/>",
			"<img src='images/nomal5.jpg'/>",
			"<img src='images/nomal6.jpg'/>",
			"<img src='images/nomal7.jpg'/>"
			]
	var more=["<img src='images/more1.jpg'/>",
			"<img src='images/more2.jpg'/>",
			"<img src='images/more3.jpg'/>",
			"<img src='images/more4.jpg'/>",
			"<img src='images/more5.jpg'/>",
			"<img src='images/more6.jpg'/>",
			"<img src='images/more7.jpg'/>"
			]
	var _big=["<img src='images/big1.jpg'/>",
				"<img src='images/big2.jpg' />",
				"<img src='images/big3.jpg' />",
				"<img src='images/big4.jpg'/>",
				"<img src='images/big5.jpg' />",
				"<img src='images/big6.jpg'/>",
				"<img src='images/big7.jpg' />"
			]
		Bigpic.innerHTML=arr[0]+"<div class='xiao'></div><div class='big'></div>"
		var Big=Bigpic.getElementsByClassName('big')[0];
		Big.innerHTML=_big[0];
		for(var i=0;i<more.length;i++){
				var li=document.createElement('li');
				li.innerHTML=more[i];
				Ul.appendChild(li);
				li.index=i
				li.onclick=function(){
					var Li=Ul.getElementsByTagName('li');
					for(var j=0;j<Li.length;j++){
						Li[j].style.borderColor='#fff'
					}
					this.style.borderColor='red'
					Bigpic.innerHTML=arr[this.index]+"<div class='xiao'></div><div class='big'></div>"
					var Big=Bigpic.getElementsByClassName('big')[0];
					Big.innerHTML=_big[this.index]
				}
		}
		var Li=Ul.getElementsByTagName('li');
		Li[0].style.borderColor='red'
		var But=Product.getElementsByTagName('button')
		var ids=0
		Ul.style.width=64*more.length+'px'
			But[0].onclick=function(){
				ids+=64
				if(ids>0){ids=0}
				Ul.style.transform='translate('+ids+'px,0)'	
			}
			But[1].onclick=function(){
				ids-=64
				if(ids<-(64*more.length-320)){ids=-(64*more.length-320)}
				Ul.style.transform='translate('+ids+'px,0)'	
			}
		Bigpic.onmouseover=function(){
			run('product','bigpic','big')
		}
	function run(sum1,sum2,sum3){
	var B0=document.getElementsByClassName(sum1)[0];
	var B1=B0.getElementsByClassName(sum2)[0];
	var B2=B1.getElementsByClassName(sum3)[0];
	var Xiao=B1.getElementsByClassName('xiao')[0];
	var Img=B2.getElementsByTagName('img')[0];
	var scrollp=document.documentElement.scrollTop||document.body.scrollTop
			B1.onmousemove=function(ev){
			Xiao.style.display='block';
			B2.style.display='block'
			var EV=ev||event;
			var l=EV.clientX-B1.offsetLeft-Xiao.offsetWidth/2;
			var t=EV.clientY+scrollp-B1.offsetTop-Xiao.offsetHeight/2;
			if(l<0){l=0}
			if(l>B1.offsetWidth-Xiao.offsetWidth){l=B1.offsetWidth-Xiao.offsetWidth}
			if(t<0){t=0}
			if(t>B1.offsetHeight-Xiao.offsetHeight){t=B1.offsetHeight-Xiao.offsetHeight}
			Xiao.style.left=l+'px';
			Xiao.style.top=t+'px';
			l_rate=l/(B1.offsetWidth-Xiao.offsetWidth);
			t_rate=t/(B1.offsetHeight-Xiao.offsetHeight);
			var L=-(Img.offsetWidth-B2.offsetWidth)*l_rate;
			var T=-(Img.offsetHeight-B2.offsetHeight)*t_rate;
			Img.style.top=T+'px';
			Img.style.left=L+'px';
			}
			B1.onmouseout=function(){
				B2.style.display='none';
				Xiao.style.display='none';	
			}
	}

}
//center区域+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function center(){
		var json={
				'title':'爱国者（aigo）普罗米修斯 白色 中塔式机箱（支持ATX主板/标配一个12CMLED静音风扇/USB3.0/侧透）',
				'tab':'标配2把12厘米LED风扇，双USB3.0，双风扇调速器，预留多风扇位，支持背部走线，透明侧透，开启你的机箱频道',
				'price':'¥139.00',
				'mesage':['满99.00元另加6.90元即可在购物车换购热销商品  ','买京东自营电脑、手机、数码品类指定产品，结算满199元,返京东自营大闸蟹满399减150元东券一张.'],
				'biaozhi':['加价购','满额返券'],
				'number':'55838',
				'dist':['有货','支持99元免运费 | 货到付款'],
				'service':'爱国者DIV旗舰店',
				'style_img':["<img src='images/xiaotu1.jpg'/>","<img src='images/xiaotu2.jpg'/>","<img src='images/xiaotu3.jpg'/>","<img src='images/xiaotu4.jpg'/>","<img src='images/xiaotu5.jpg'/>","<img src='images/xiaotu6.jpg'/>"],
				'style_text':['【经典爆款-中塔ATX】黑骑士D8','【新潮韩风-中塔】普罗米修斯-黑','【新潮韩风-中塔】普罗米修斯-白','【简约主义-中塔】YOGO优果','【新潮韩风-中塔】普罗米修斯-黑','【简约主义-中塔】YOGO优果'],
				'zengzhi_img':["<img src='images/zengzhi1.png'/>","<img src='images/zengzhi2.png'/>"],
				'zengzhi_text1':['延长保质1年','延长保质2年','延长保质3年','延长保质4年','延长保质5年'],
				'zengzhi_text2':['故障换新','免费修'],
				'taozhuang':['一件','两件'],
				'fenqi':['30天免息','¥47.03*3期','¥23.86*6期','¥12.28*12期','¥6.49*24期']
			}
		var Cont=document.getElementsByClassName('content')[0];
		var Center=Cont.getElementsByClassName('center')[0];
		var H3=Center.getElementsByTagName('h3')[0];
		H3.innerHTML+=json.title;
		var Canshu=document.getElementById('canshu');
			Canshu.innerHTML=json.tab;
			Canshu.style.color='red';
		var Price=Center.getElementsByClassName('price')[0];
		var Price_mesage=Price.getElementsByClassName('mesage')[0];
		var Price_mesage_right = Price_mesage.getElementsByClassName('right')[0];
		var Jiage=Price.getElementsByClassName('jiage')[0]
		var Jiage_right=Jiage.getElementsByClassName('right')[0]
		var Jiage_right_span=Jiage_right.getElementsByTagName('span')[0];
			Jiage_right_span.innerHTML=json.price;//--------------------------------------------------------------------------价格
			for(var i=0;i<json.biaozhi.length;i++){
				var Li=document.createElement('li');
				Price_mesage_right.appendChild(Li);
				Li.innerHTML='<i>'+json.biaozhi[i]+'</i><span>'+json.mesage[i]+"</span><a href='javascript:;'>详情》</a>"//----mesage
			}
		var Rate=Price.getElementsByClassName('rated')[0];
		var Num=Rate.getElementsByClassName('number')[0];
			Num.innerHTML=json.number;//--------------------------------------------------------------------------------------评价
		var Dist=Center.getElementsByClassName('dist')[0];
		var Span=Dist.getElementsByTagName('span');
			Span[0].innerHTML=json.dist[0];//
			Span[1].innerHTML=json.dist[1];//-----------------------------------------------------------------------------配送至
		var Service=Center.getElementsByClassName('service')[0];
		var Span=Service.getElementsByTagName('span')[0];
		Span.innerHTML=json.service;//---------------------------------------------------------------服务
		var Choes=Center.getElementsByClassName('choes');
		var right0=Choes[0].getElementsByClassName('right')[0];
		var I0=document.createElement('i');
		for(var i=0;i<json.style_img.length;i++){
			var A=document.createElement('a');
			A.href='javascript:;'
			A.innerHTML=json.style_img[i]+json.style_text[i];	
			right0.appendChild(A);
			A.onclick=function(){
					this.appendChild(I0);
						var A0=right0.getElementsByTagName('a');
						for(var k=0;k<A0.length;k++){
						A0[k].style.borderColor='#CCC';
						}
					this.style.borderColor='red'
				}
		}
		var A0=right0.getElementsByTagName('a');
		A0[0].appendChild(I0);
		A0[0].style.borderColor='red'
		//----------------------------------------------------------------------------------------------选择样式
		var  right1=Choes[1].getElementsByClassName('right')[0];
			var p=document.createElement('p')
			var sel=document.createElement('select');
				for(var i=0;i<json.zengzhi_text1.length;i++){
				var option=document.createElement('option');
				option.innerHTML=json.zengzhi_text1[i];
				sel.appendChild(option);
			}
			right1.appendChild(p);
			p.appendChild(sel)
			p.innerHTML+=json.zengzhi_img[0];
			var p2=document.createElement('p')
			var sel2=document.createElement('select');
				for(var i=0;i<json.zengzhi_text2.length;i++){
				var option=document.createElement('option');
				option.innerHTML=json.zengzhi_text2[i];
				sel2.appendChild(option);
			}

			right1.appendChild(p2);
			p2.appendChild(sel2)
			p2.innerHTML+=json.zengzhi_img[1];
		var B=document.createElement('button');
		B.className='help';
		right1.appendChild(B);	

		//-------------------------------------------------------------------------------------增值保障
		var right2=Choes[2].getElementsByClassName('right')[0];
		var I2=document.createElement('i');
		for(var i=0;i<json.taozhuang.length;i++){
			var A=document.createElement('a');
			A.href='javascript:;'
			A.innerHTML=json.taozhuang[i]
			right2.appendChild(A);
			A.onclick=function(){
					this.appendChild(I2);
						var A0=right2.getElementsByTagName('a');
						for(var k=0;k<A0.length;k++){
						A0[k].style.borderColor='#CCC';
						}
					this.style.borderColor='red'
				}
		}
		var A0=right2.getElementsByTagName('a')[0];
		A0.appendChild(I2);
		A0.style.borderColor='red'
		//----------------------------------------------------------------------------------分期
		var right3=Choes[3].getElementsByClassName('right')[0];
		var I3=document.createElement('i');
		for(var i=0;i<json.fenqi.length;i++){
			var A=document.createElement('a');
			A.href='javascript:;'
			A.innerHTML=json.fenqi[i]
			right3.appendChild(A);
			A.onclick=function(){
					this.appendChild(I3);
						var A0=right3.getElementsByTagName('a');
						for(var k=0;k<A0.length;k++){
						A0[k].style.borderColor='#CCC';
						}
					this.style.borderColor='red'
				}
		}
		var A0=right3.getElementsByTagName('a')[0];
		A0.appendChild(I3);
		A0.style.borderColor='red'
		var A0=right3.getElementsByTagName('a');
		A0[0].style.borderColor='red'
		var B=document.createElement('button');
		B.className='help';
		right3.appendChild(B);
		//------------------------------------------------------------------------白条分期
		var Buy=Center.getElementsByClassName('buy')[0];
		var span=Buy.getElementsByTagName('span');
		var P=Buy.getElementsByTagName('p')[0];
		var n=0
		span[0].onclick=function(){
			n++
			if(n<0){
				n=0;
			};
			P.innerHTML=n;
		}
		span[1].onclick=function(){
			n--	;
			if(n<0){
				n=0;
			};
			P.innerHTML=n;
		}
			
}
//-----------------------------------++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++footer区域
function footer(){
	var json={
		'footer':[
			{"title":"推荐配件","content":[
											{"name":"推荐键盘","img":[
													                  "images/dadang1.jpg",
													                  "images/dadang2.jpg",
													                  "images/dadang3.jpg",
													                  "images/dadang4.jpg",
													                  "images/dadang5.jpg",
													                  "images/dadang6.jpg",
													                  "images/dadang7.jpg",
													                  "images/dadang8.jpg",
													                  "images/dadang9.jpg"
											                        ]
											},
											{"name":"键盘","img":[
																		"images/dadang10.jpg",
																		"images/dadang11.jpg",
																		"images/dadang12.jpg",
																		"images/dadang13.jpg",
																		"images/dadang14.jpg"
											                        ]
											},
											{"name":"装机配件","img":[
																		"images/dadang15.jpg",
																		"images/dadang5.jpg",
																		"images/dadang6.jpg",
																		"images/dadang9.jpg",
																		"images/dadang2.jpg"
											                        ]
											},
											{"name":"鼠标","img":[
																		"images/dadang4.jpg",
																		"images/dadang5.jpg",
																		"images/dadang6.jpg",
																		"images/dadang7.jpg"
											                        ]
											}
										]
			},
			{"title":"优惠套装","content":[
											{"name":"套装1","img":[
																		"images/dadang2.jpg",
																		"images/dadang3.jpg",
																		"images/dadang4.jpg",
																		"images/dadang5.jpg"
											                       ]
											},
											{"name":"套装2","img":[
																		"images/dadang10.jpg",
																		"images/dadang11.jpg",
																		"images/dadang12.jpg"
											                        ]
											},
											{"name":"套装3","img":[
																		"images/dadang2.jpg",
																		"images/dadang3.jpg",
																		"images/dadang4.jpg",
																		"images/dadang5.jpg",
																		"images/dadang6.jpg",
																		"images/dadang7.jpg",
																		"images/dadang8.jpg",
																		"images/dadang9.jpg"
											                        ]
											},
											{"name":"套装4","img":[
																		"images/dadang4.jpg",
																		"images/dadang5.jpg",
																		"images/dadang6.jpg"
											                        ]
											}
										]
			},
			{"title":"最佳组合","content":[
											{"name":"","img":[
												"images/dadang4.jpg",
												"images/dadang5.jpg",
												"images/dadang6.jpg",
												"images/dadang7.jpg",
												"images/dadang8.jpg",
												"images/dadang9.jpg"
												]}
										]
			}
		]
	}
	var Footer=document.getElementsByClassName('footer')[0];
	var  Header=Footer.getElementsByClassName('header')[0];
	var Content=Footer.getElementsByClassName('content')[0];
	var Subnav=Content.getElementsByClassName('subnav')[0];
	var Shop=Content.getElementsByClassName('shop')[0];
	var Ciyao=Shop.getElementsByClassName('ciyao')[0];
	var Inner=Ciyao.getElementsByClassName('inner')[0];
	var Imp=Shop.getElementsByClassName('imp')[0];
	var Img=Imp.getElementsByClassName('img')[0];
	var P=Imp.getElementsByTagName('p')[0];
	for(var i=0;i<json.footer.length;i++){
		var Li=document.createElement('li');
		Li.index=i
		Li.innerHTML=json.footer[i].title;
		Header.appendChild(Li);
		var Li_click=function(who){
				Subnav.innerHTML='';
				var dex=who;
				var LI=Header.getElementsByTagName('li');
				for(var j=0;j<LI.length;j++){
					LI[j].className=''
				}
				LI[who].className='ac';
				//+++++++++++++++++++++++++++++++++++++++++++一级导航
				var div=document.createElement('div');
				for(var k=0;k<json.footer[who].content.length;k++){
					var A=document.createElement('a');
					A.value=dex;
					A.index=k;
					A.href='javascript:;';
					A.innerHTML=json.footer[who].content[k].name;
					Subnav.appendChild(A)
				}
			}
		var sub_click=function(who,val){
			Inner.innerHTML='';
			for(var h=0;h<Subnav.getElementsByTagName("a").length;h++){
				Subnav.getElementsByTagName("a")[h].style.color="#666"
			}
			Subnav.getElementsByTagName("a")[who].style.color="red"
			for(var p=0;p<json.footer[val].content[who].img.length;p++){
				var img=document.createElement('img');
				var jia=document.createElement("i");
				jia.innerText="+";
				img.src=json.footer[val].content[who].img[p];
				img.style.width="100px";
				jia.style.width="50px";
				Inner.appendChild(img)
				Inner.appendChild(jia)
			}
			var a_length=Inner.getElementsByTagName("img");
			var i=Inner.getElementsByTagName("i");
			Inner.style.width=(parseInt(i[0].style.width)+36+parseInt(a_length[0].style.width))*a_length.length+"px";
		};
		Li_click(0)
		sub_click(0,0)
		for( var l=0;l<Subnav.getElementsByTagName("a").length;l++) {
			Subnav.getElementsByTagName("a")[l].index=l;
			Subnav.getElementsByTagName("a")[l].onclick = function(){
				sub_click(this.index, 0);
			}
		}
		Li.onclick=function(){
					Li_click(this.index)
		        	sub_click(0,this.index)
						for( var m=0;m<Subnav.getElementsByTagName("a").length;m++){
							Subnav.getElementsByTagName("a")[m].onclick=function(){
								sub_click(this.index,this.value);
							}
						}
		}
	}
	var li=Header.getElementsByTagName('li');
	li[0].className='ac';
	Ciyao.style.display='block'
}
	