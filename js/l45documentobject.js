// let val;

// val=document;
// val=document.doctype;
// val=document.head;
// val=document.body;
// val=document.URL;

// val=document.links;//HTML Collection length 6
// // val=document.links[0];// List Item1
// // val=document.links[3];// List Item4
// // val=document.links[3].id;//result = delete-item4
// // val=document.links[3].className;//result = delete-item

// val=document.links[3].classList;//result DOMTokenList ['delete-item', 'dele-me', value: 'delete-item dele-me']
// val=document.links[3].classList[0]; // result = delete-item
// val=document.links[3].classList[1];//result = delete-me

// val=document.forms;//HTMLColletion
// val=document.forms[0];//<>
// val=document.forms[0].id;//form (string)
// val=document.forms[0].className;//form (string)
// val=document.forms[0].classList;//DOMTokenList
// val=document.forms[0].action;//file:///D:/dltwdfbatch7/act (to send database)
// val=document.forms[0].method;//post (string)

// val=document.images;//HTMLCollection
// val=document.images[0];//obj img.loading
// val=document.images[0].id;//loading (string)
// val=document.images[0].className;//loading (string)
// val=document.images[0].classList;//DOMTokenList []
// val=document.images[0].classList[0];//loading (string)
// val=document.images[0].alt;//post (string)
// val=document.images[0].src;// source link appear 
// // // val=document.images[0].type;//undefined (not from html default)
// val=document.images[0].getAttribute("type");//can call exist or not(null)
// val=document.images[0].getAttribute("src");// link appear 

// val=document.scripts;//HTMLCollection
// val=document.scripts[0];
// val=document.scripts[0].src;
// val=document.scripts[0].type;
// val=document.scripts[0].getAttribute("src"); //files way
// val=document.scripts[0].getAttribute("type");  //javascript


// // console.log(val);

// // Change Styling
// document.getElementById("tasktitle").style.background="green";
// document.getElementById("tasktitle").style.color="#fff";
// document.getElementById("tasktitle").style.padding="5px";

// // Change Content

// // document.getElementById("tasktitle").textContent= "My List";
// // document.getElementById("tasktitle").innerText= "My Tasks";
// // document.getElementById("tasktitle").innerHTML= '<span style="color:blue">My Job</span>';

// // Call by  className

// let lis=document.getElementsByClassName("list-group-item");//HTMLCollection

// // console.log(lis);
// // console.log(lis[0]);
// // lis[0].style.color="blue";
// // lis[1].textContent="Have to visit";


// // Call by tag(Element)

// let litags = document.getElementsByTagName('li');
// // console.log(litags);
// // console.log(litags[3]);
// // litags[0].style.color="red";
// // litags[1].innerText="Have to cook";

// // QuerySelector()

// // console.log(document.querySelector("#tasktitle"));
// // console.log(document.querySelector(".card-title"));
// // console.log(document.querySelector("h3"));


// // console.log(document.querySelector("li"));

// // document.querySelector("li").style.color="red";
// // document.querySelector("ul li").style.color="blue";
// document.querySelector("ul li:nth-child(odd)").style.background ="silver";
// document.querySelector("ul li:nth-child(even)").style.background ="grey";
// document.querySelector("ul li:last-of-type").style.background ="green";
// document.querySelector("ul li:nth-of-type(3)").style.textContent ="Have to read";


// let  listitems=document.querySelector("ul").querySelector(".list-group-item");//result=first li
// 	     listitems=document.querySelector("ul").getElementsByClassName("list-group-item");//HTML Collection

// 	// console.log(listitems);

// 	// console.log(listitems[3]);
// 	// console.log(typeof listitems);

// 	let arritems=Array.from(listitems);
// 	//console.log(arritems);


// // forEach is not a function occurs when it is looping the item is not array
// 	//arritems.forEach(function(arritem,idx){
// 		// console.log(arritem);

// 	// 	arritem.textContent="Hello";

// 	// 	arritem.innerText=`${idx} : Hello`;
// 	// });


// 	//querySelectorAll

// 	let its=document.querySelector("ul.list-group li.list-group-item");
// 	// console.log(its);

// // NodeList (it is also array type)
// 	let itms=document.querySelectorAll("ul.list-group li.list-group-item");//Node List
// 	// console.log(itms);
// 	// console.log(itms[3]);

// // (Nodelist) is able to use in looping
// 	//itms.forEach(function(itm,idx){
// 		// console.log(itm);
// 		// itm.textContent="Hello";

// 	//	itm.innerText= `${idx} : Hello`;
// 	//});
// 	//HTML Collection ဆိုရင် object arrayဖြစ်ပေမဲ့ loopingပတ်လို့မရပါ။ ပတ်ချင်ရင်တော့ pure arrayဖြစ်အောင် Array.fromသုံးပြီး ပြောင်းရင်ရတဘ်
// 	//Node Listကတော့ arrayဖြစ်တယ် ,ဒါကြောင့် looping ပတ်လို့ရပါတယ်.


// 	const liodds= document.querySelectorAll("li:nth-child(odd)");
// 		// console.log(liodds);


// 	const lievens= document.querySelectorAll("li:nth-child(even)");
// 		// console.log(lievens);

// 	liodds.forEach(function(liodd,idx){
// 		// console.log(liodd);
// 		liodd.style.background="grey";
// 	});


// 	for(let i=0;i< lievens.length;i++){
// 		// console.log(i);

// 		// console.log(lievens[i]);

// 		lievens[i].style.background="silver";
// 	}


// 	//childern

// 	let chl;

// 	const getul= document.querySelector("ul.list-group");
// 		//console.log(getul);
// 	const getli= document.querySelector("li.list-group-item:first-child");
// 		//console.log(getli);

// 	chl= getul.childern;//HTML Collection
// 	// console.log(chl);
// 	// console.log(chl[3]);


// 	// getul.childern[1].innerText= "Have to eat";
// 	//getul.childern[1].innerHTML= `Have to read <a href="#" id="delete" class="delete-item2">
// 							// <i class="far fa-trash-alt"></i></a>`;


// 	//children to children

// 	chl=getul.children;
// 	chl=getul.children[1];
// 	chl=getul.children[1].children;
// 	chl=getul.children[1].children[0];
// 	chl=getul.children[1].children[0].id;
// 	chl=getul.children[1].children[0].className;
// 	chl=getul.children[1].children[0].classList;
// 	chl=getul.children[1].children[0].href;
// 	chl=getul.children[1].children[0].getAttribute("href");

// 			//ul    li           a        HTMLCollection
// 	chl=getul.children[1].children[0].children;

// 		//ul        li        a         i
// 	chl=getul.children[1].children[0].children[0];

// 	// console.log(chl);


// //first element child

// // chl = getul.querySelector('li');
// chl = getul.firstElementChild;
// // console.log(chl);


// //last element child

// // chl = getul.querySelector('li:last-child');
// chl = getul.lastElementChild;
// // console.log(chl);



// //child element count
// chl = getul.children.length;
// chl = getul.childElementCount;

// chl = getul.children[0].childElementCount;  //results 1 (a tag)
// chl = getul.children[0].children[0].childElementCount;  //results 1 (i tag)

// // console.log(chl);


// //parent element

// const getfirstli = document.querySelector('li.list-group-item:first-child');
// // console.log(getfirstli);

// let par = getfirstli.parentElement; //childerကနေ parentရှာတာပါ။
// 	//console.log(par);//objectနဲံထွက်မယ်



// // Next Element Sibling

// 		// list item 1		list item 2
// let sbl = getfirstli.nextElementSibling;
// 		// list item 1		list item 2			list item 3
// 	sbl = getfirstli.nextElementSibling.nextElementSibling;
// 		// list item 1		list item 2			list item 3       list item 4
// 	sbl = getfirstli.nextElementSibling.nextElementSibling.nextElementSibling;
// 			// list item 1		list item 2			list item 3       list item 4		 list item 5
// 	sbl = getfirstli.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;

// // console.log(sbl);

	
// 	//Previous Elements Sibling

// 		// list item 1   list item 2   list item 3          list item 2
// let psbl = getfirstli.nextElementSibling.nextElementSibling.previousElementSibling;
// // console.log(psbl);





// // Create Element

// const newli = document.createElement("li");
// //console.log(newli);//result=object<li></li>

// // Add ID
// newli.id = "new-item";

// 	//const.log(newli);
// 	//result= <li id="new-item"></li>

// // Add Class
// // newli.className = "list-group-item"
// // newli.className = "delete-me";
// // newli.className = "list-group-item delete-me";
// // newli.classList.add("delete-i","hide me");

// //className ကနှစ်ခုဖြစ်သွားရင် overwriteဖြစ်သွားတယ်.
// //classListက ထပ်ထည့်ချင်ရင် နောက်မှာ (,)ထည့်ပြီးရေးရင်ရတဘ် overwriteမဖြစ်ဘူး


// // Add Attribute = setAttribute(qulifiedName, value);
// newli.setAttribute("title","newitem");

// // newli.textContent = "hay";
// // newli.innerText = "hi"
// // newli.innerHTML = `List Item 6 <a href="#" id="delete-item1" class="delete-item"><i class="far fa-trash-alt"></i></a>`



// // Create Text Node (စာသားထည့်ချင်ရင် document.createTextNode())သုံးတယ်

// newli.appendChild(document.createTextNode("Save Myanmar"));

// // console.log(newli);
// //appendChildဆိုတာ<li>Tageတွေကြားမှာ childအနေနဲ့ထည့်မှရမယ်.

// // <li id="new-item" class="list-group-item" title="newitem">Save Myanmar</li>

// const newlink = document.createElement("a");

// // Add href
// newlink.href = "#";

// // Add ID 
// newlink.id = "delete-item6"

// // Add Class
// newlink.classList.add("delete-item");

// newlink.innerHTML = `<i class="far fa-trash-alt"><i>`

// // console.log(newlink);

// // <a href="#" id="delete-item5" class="delete-tem"></a>

// newli.appendChild(newlink);
// // console.log(newli);

// document.querySelector("ul.list-group").appendChild(newli);



// // Replace Element

// const newtitleh2 = document.createElement("h2");

// newtitleh2.id = "tasktitle";

// var newcaption = document.createTextNode("All My Lists");
// newtitleh2.appendChild(newcaption);
// //စာသားအသစ်ရေးရင် createTextNodeကိုသုံးပြီး tagရဲ့နောက်မှာ appendထည့်ချင်လို့ appendChild ()ကိုသုံးပေးရမဘ်။
// //<a><i></i></a> tagကိုဘဲ appendလုပ်ချင်ရင် createTextNodeရေးစရာမလိုပဲ childအနေနဲ့ထည့်မှာဖြစ်လို့ appendChild()ကိုသုံးပေးရမယ်

// // console.log(newtitleh2);

// const oldtitleh4 = document.getElementById("tasktitle");
// // console.log(oldtitleh4);

// // replaceChild(new,old);

// const getcardaction = document.querySelector(".card-action");

// getcardaction.replaceChild(newtitleh2,oldtitleh4);


// // Remove Element (self)

// const getlis = document.querySelectorAll("li"); //Node List
// // console.log(getlis);
// // console.log(getlis[0]);
// // getlis[0].remove();
// // getlis[5].remove();


// // Remove Child Element
// const getfirstul = document.querySelector("ul");
// // console.log(getfirstul);

// // getfirstul.remove();

// // getfirstul.removeChild(getlis[5]);
// // getfirstul.removeChild(getlis[0]);


// // querySelectorAll==>NodeList
// // className Vs classList (array)
// // classNameရဲ့အားနည်းချက်က တစ်ခုထပ်တိုးတိုင်း အသစ်တစ်ခါပြန်ရေးနေရတဘ်

// const firstli = document.querySelector("li:first-child");  // ("li:first-child") = ("li")
// // console.log(firstli);
// // console.log(firstli.children); //HTML Collection
// // console.log(firstli.children[0]);

// let firstlink;
// 				// a
// firstlink = firstli.children[0];
// // console.log(firstli.children[0].className);

// // a
// // firstlink.className = "delete-myself";
// // firstlink.className = "delete-item delete-myself";
// // firstlink.className = "delete-item delete-me delete-myself";

// // firstlink = firstlink.classList; //DOM Token List
// // console.log(firstlink);
// // console.log(firstlink[0]);
// // console.log(firstlink[1]);

// // a
// // firstlink.classList.add("delete-ourserve");
// // firstlink.classList.add("delete-myself");
// // firstlink.classList.add("delete-myself","delete-ourserve");

// // firstlink.className = "delete-item delete-me delete-myself delete-ourserve";
// // firstlink.className = "delete-item delete-me delete-myself";

// // firstlink.classList.remove("delete-myself");
// // firstlink.classList.remove("delete-myself","delete-ourserve");


// //replace(old,new);
// // firstlink.className = "delete-item delete-myself";
// // classNameနဲ့သာအစားထိုးရင်အစကနေပြန်ရေးနေရမယ်(အဆင်မပြေဘူး)

// // firstlink.classList.replace("delete-me","delete-myself");
// // firstlink.classList.replace("delete-item","delete-ourserve");


// //selectorကို ပါမပါစစ်ချင်ရင် contains()
// //string ကိုစစ်ရင်တော့ === /stringက သူ့မှာပါ၀◌င်တဲ့ တစ်ကြောင်းလုံးကိုစစ်တာ


// // if(firstlink.classList.contains("delete-me")){
// // 	console.log("yes");
// // }else{
// // 	console.log("no");
// // }




// // if(firstlink.className === "delete-item"){  //results >> no (Bcoz of all className isn't same)
// // 	console.log("yes");
// // }else{
// // 	console.log("no");  
// // }


// // if(firstlink.className === "delete-item delete-me"){   //results >> yes (Bcoz of all className are same)
// // 	console.log("yes");
// // }else{
// // 	console.log("no");
// // }

// // console.log(firstlink.className);





// // Attribute


// let getatt= firstlink.href;
// // console.log(getatt);

// getatt= firstlink.getAttribute("href");


// firstlink.setAttribute("href","https://google.com");

// getatt=firstlink.hasAttribute("href");
// // console.log(getatt);//true

// getatt= firstlink.hasAttribute("title");
// // console.log(getatt);//false




// // addEventListener(eventype,function)

// const clearbtn = document.querySelector(".clear-tasks"); //object နဲ့ထွက်မယ် <a>tag တစ်ကြောင်းထွက်မယ်

// // Method1
// //clearbtn.addEventListener('click',function(e){
// 	//Regular Function
// 	// console.log("hay i am working");

// 	// console.log(e);
// 	// console.log(e.target);
// 	// console.log(this);
// //});

// clearbtn.addEventListener('click',(e)=>{
//     // console.log('hay i am working');

//     // console.log(e);
//     // console.log(e.target);
//     // console.log(this);

//     // e.preventDefault(); //codeတွေကိုသတ်ချင်ရင်သုံး fromမှာ reload မဖြစ်ချင်ရင်လဲသုံး

// //arrow-function don't work  at this keyword
// });


// // Method2

// clearbtn.addEventListener('click',myclick);


// function myclick(e){

// 	// console.log("Hay i am working");

// 	// console.log(e);
// 	// console.log(e.target);
// 	// console.log(this);

// 	let val;

// 	val = e.target.className;
// 	val = e.target.classList; //DOM Token List
// 	val = e.target.id;
// 	// console.log(val);

// 	// e.target.innerText = "Finished";


// 	//jsမှာစာပြောင်းရင် (၃)ခု
// 	//jqueryမှာစာပြောင်းရင် (5)


// 	// Event Type (eventတွေရဲ့typeကိုစစ်တာ)
// 	// val = e.type;

// 		// Coordinates event - relative to the window
// 	// val = e.clientX; //window width(ဘယ်ညာ)
// 	// val = e.clientY;  //window height(ပေါ်အောက်)


// 		// Coordinates event - relative to the element
// 	// val = e.offsetX;  //(btn)ရဲ့ (၀,၀)ထိကပဲစယူတယ်
// 	// val = e.offsetY;


// 	// console.log(val);
// }


// //this က regular functionမှာဘဲအလုပ်လုပ်မယ်
// // eက တစ်ခုလုံးရဲ့information တစ်ခုလုံးထွက်တယ်။ e.targetက <a>tag တစ်ခုလုံးထွက်တယ်။this က buttonကို သူပါဆိုပြီးပြောတာပါ




// // MouseEvent

// const clbtn = document.querySelector(".clear-tasks");
// const headingh2 = document.querySelector(".card");

// // single click
// // clbtn.addEventListener('click',mouseeventtype);

// // double click
// // clbtn.addEventListener('dblclick',mouseeventtype);

// // mousedown
// // clbtn.addEventListener('mousedown',mouseeventtype);

// // mouseup
// // clbtn.addEventListener('mouseup',mouseeventtype);

// //Mouseenter
// // card.addEventListener("mouseenter",mouseeventtype)

// //MouseOver
// // cardactionarea.addEventListener("mouseover",mouseeventtype);

// //MouseLeave
//  // card.addEventListener("mouseleave",mouseeventtype);

// //Mouseout (action to each childs mouse hover)
// // cardactionarea.addEventListener("mouseout",mouseeventtype);

// // Mouse move
// // headingh2.addEventListener('mousemove',mouseeventtype);



// // function mouseeventtype(e){

// // 	console.log(`Event type = ${e.type}`);


// // 		headingh2.textContent = `MouseX: ${e.clientX} MouseY: ${e.clientY}`;
// // 	headingh2.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

// // 	document.body.style.background = `rgba(${e.offsetX},${e.offsetY},${e.offsetX},1)`;

// // }





// // const formel = document.querySelector("form");

// // formel.addEventListener("submit", inputeventtype);

// // function inputeventtype(e){
// // 	console.log(`Event Type = ${e.type}`);

// // 	e.preventDefault();
// // }



// // const inputtask = document.getElementById('task');
// // const geth2 = document.querySelector('h2');

// //keydown
// // inputtask.addEventListener("keydown",inputeventtype);

// // //keypress
// // inputtask.addEventListener("keypress",inputeventtype);

// // //keyup
// // inputtask.addEventListener("keyup",inputeventtype);

// // //input
// // inputtask.addEventListener("input",inputeventtype);

// // //focus
// // inputtask.addEventListener("focus",inputeventtype);

// // //blur = focus out
// // inputtask.addEventListener("blur",inputeventtype);

// // //cut
// // inputtask.addEventListener("cut",inputeventtype);

// // //paste
// // inputtask.addEventListener("paste",inputeventtype);


// // function inputeventtype(e){
// // 	console.log(`Event Type = ${e.type}`);

// // 	console.log(inputtask.value);
// // 	geth2.textContent = inputtask.value;



// // 	console.log(e.target.value);
// // 	geth2.textContent = e.target.value;

// // 	e.preventDefault();
// // }





// //Event Bubbling (call event bubbling >> event bubbling's all parents outcome)

// document.querySelector('.card-title').addEventListener('click',function(){
// 	console.log('i am card-title');
// });

// document.querySelector('.card-content').addEventListener('click',function(){
// 	console.log('i am card-content');
// });

// document.querySelector('.card').addEventListener('click',function(){
// 	console.log('i am card-content');
// });



// //Event Delegation ( call click each element )


// // const deleitem = document.querySelector('.delete-item');

// // deleitem.addEventListener('click',deleteitem);

// // function deleteitem(e){
// // 	console.log('I am delete-item');

// // 	console.log(e.target);

// // 	e.preventDefault();
// // }

// document.body.addEventListener('click',evendeleg);

// function evendeleg(e){

// 	//console.log('i am working');

// 	// console.log(e.target);

// 		//i
// // 	if(e.target.className === "far fa-trash-alt"){
// // 		console.log('hay i am trash can');
// // 	}
// // }

// 	// 	// i      a
// 	// if(e.target.parentElement.className === 'delete-item'){
// 	// 	console.log('hay i am delete item by a tag');
// 	// }
// 		// i      a
// 	// if(e.target.parentElement.className === 'delete-item delete-me'){
// 	// 	console.log('hay i am delete item by a tag');
// 	// 	e.preventDefault();
// 	// }

// 		// i      a
// // 	if(e.target.parentElement.classList.contains('delete-item')){
// // 		// console.log('hay i am delete item by a tag');
// // 			//i
// // 		// e.target.remove();
// // 		    //i       a
// // 		// e.target.parentElement.remove();
// // 			//i  	  a            li
// // 		e.target.parentElement.parentElement.remove();

// // 	}
// // 	e.preventDefault();
// // }




// //localstorage

document.querySelector('form').addEventListener('submit',function(e){

	e.preventDefault();

	// console.log('hay i am working');

	const getnewtask = document.getElementById('task').value;
	// console.log(getnewtask);

							// key     value
	localStorage.setItem('mytask',getnewtask); // add value to localStorage

	let alltasks; // for multiple values

	if(localStorage.getItem('mytasks') === null){   //if condition for multiple values add

		alltasks = [];   // start null value in localStorage   get empty array

	}else{

		alltasks = JSON.parse(localStorage.getItem('mytasks')); // if value in localStorage (string to array) Bcoz of .push is array Method
	}


	// ["have to eat"]
		// key         value
	alltasks.push(getnewtask);  // for add value array in localStorage


	// ['have to eat', 'have to cook'];

	localStorage.setItem('mytasks',JSON.stringify(alltasks)); //add from array change to string (Bcoz of localStorage is only receive with string type)

	console.log(alltasks);



	
});

// console.log(localStorage.getItem('mytasks'));
// console.log(typeof localStorage.getItem('mytasks'));

// console.log(JSON.parse(localStorage.getItem('mytasks')));
// console.log(typeof JSON.parse(localStorage.getItem('mytasks')));


// let getalltasks = localStorage.getItem("mytasks");
//         getalltasks = JSON.parse(localStorage.getItem('mytasks'));
// console.log(getalltasks);

// getalltasks.forEach(function(getalltask){
//         console.log(getalltask);
// });
