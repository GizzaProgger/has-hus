new Vue({
	el: "#wrapper",
	data: {
		categories: [
			{
				"name": "Роллы",
				"items": [
					{
						"name": "Смачный мага",
						"price": "320",
						"text": "Лосось, сл. сыр, огурец, лук зеленый, джункай соус, унаги соус",
						"imgPath": "https://halaleats.ru/assets/img/items/1597423026vNJOM6TDcq.jpg"
					},
					{
						"name": "Бешенный лосось",
						"price": "320",
						"text": "Лосось в фирменном соусе, сл. сыр, огурец.",
						"imgPath": "https://halaleats.ru/assets/img/items/1626615971txqlbxIszq.jpg"
					},
					{
						"name": "Филадельфия классика",
						"price": "310",
						"text": "лосось, сл. сыр, огурец.",
						"imgPath": "https://halaleats.ru/assets/img/items/1597421973gVljP1oSgm.jpg"
					},
					{
						"name": "Филадельфия люкс",
						"price": "320",
						"text": "Лосось, сл. сыр,  огурец, красная икра.",
						"imgPath": "https://halaleats.ru/assets/img/items/1608117614bm5Doosy5k.jpg"
					},
					{
						"name": "Филадельфия гриль",
						"price": "320",
						"text": "Лосось гриль, сл. сыр, огурец, унаги соус, кунжут.",
						"imgPath": "https://halaleats.ru/assets/img/items/1608117649et92uCUIKz.jpg"
					},
					{
						"name": "Филадельфия микс",
						"price": "320",
						"text": "Лосось, угорь, сл. сыр, огурец.",
						"imgPath": "https://halaleats.ru/assets/img/items/1608116972nDpqFEDUX7.jpg"
					},
					{
						"name": "Сливочная филадельфия",
						"price": "320",
						"text": "Лосось, сл. сыр.",
						"imgPath": "https://halaleats.ru/assets/img/items/16081170317EHG5sw9u5.jpg"
					},
					{
						"name": "Филадельфия с креветкой",
						"price": "320",
						"text": "Лосось, огурец, креветка, сл. сыр",
						"imgPath": "https://halaleats.ru/assets/img/items/1597422257lz2keLutIK.jpg"
					},
					{
						"name": "Филадельфия с крабом",
						"price": "320",
						"text": "Лосось, огурец, краб, сл. сыр.",
						"imgPath": "https://halaleats.ru/assets/img/items/1597422646YgY5TT7Gan.jpg"
					},
					{
						"name": "Филадельфия с тунцом",
						"price": "320",
						"text": "Лосось, огурец, тунец, сл. сыр",
						"imgPath": "https://halaleats.ru/assets/img/items/1608117565J33badSQwZ.jpg"
					},
					{
						"name": "Канада",
						"price": "320",
						"text": "Лосось, огурец, сл. сыр, угорь жаренный",
						"imgPath": "https://halaleats.ru/assets/img/items/1597424738fRptZsl3Jx.jpg"
					},
					{
						"name": "Калифорния классика",
						"price": "290",
						"text": "Майонез, огурец, краб...",
						"imgPath": "https://halaleats.ru/assets/img/items/1597423633nS1jkfdQm1.jpg"
					},
					{
						"name": "Калифорния с креветкой",
						"price": "310",
						"text": "Креветка, огурец, сл. сыр, икра масаго",
						"imgPath": "https://halaleats.ru/assets/img/items/1597424017JGXFZDb2X0.jpg"
					},
					{
						"name": "Калифорния с коп. лососем",
						"price": "310",
						"text": "коп. лосось, огурец, сл. сыр, спайси соус",
						"imgPath": "https://halaleats.ru/assets/img/items/1608117732zfm957R1t6.jpg"
					},
					{
						"name": "Пирамида",
						"price": "300",
						"text": "Краб, сл. сыр, икра масаго",
						"imgPath": "https://halaleats.ru/assets/img/items/159742412316ODDoJLct.jpg"
					},
					{
						"name": "Динамит",
						"price": "310",
						"text": "Лосос, сл. сыр, огурец, ширарачи соус",
						"imgPath": "https://halaleats.ru/assets/img/items/1626616081eTAuUrUJyv.jpg"
					},
					{
						"name": "Учкекенский понт",
						"price": "310",
						"text": "Лосось, креветка, сл. сыр, огурец, ширарачи соус",
						"imgPath": "https://halaleats.ru/assets/img/items/159742510493xAj1A1CC.jpg"
					},
					{
						"name": "Терезинский вечер",
						"price": "310",
						"text": "Лосось, краб, огурец, спайси соус",
						"imgPath": "https://halaleats.ru/assets/img/items/15974251878HhH50c7dO.jpg"
					},
					{
						"name": "Ронин",
						"price": "310",
						"text": "Коп. лосось, сл. сыр, огурец, лук зел., спайси соус",
						"imgPath": "https://halaleats.ru/assets/img/items/1608117760d55J9TVzpA.jpg"
					},
					{
						"name": "Цезарь ролл",
						"price": "310",
						"text": "Лосось, гриль, огурец, соус цезарь, помидор",
						"imgPath": "https://halaleats.ru/assets/img/items/1597424963FaIVTieUvy.jpg"
					},
					{
						"name": "Чикен ролл",
						"price": "280",
						"text": "Курица, майонез, огурец, помидор",
						"imgPath": "https://halaleats.ru/assets/img/items/1597424792VW8kX9PKF7.jpg"
					}
				]
			},
			{
				"name": "Запеченные роллы",
				"items": [
					{
						"name": "Император",
						"price": "320",
						"text": "Лосось, сл. сыр, огурец",
						"imgPath": "https://halaleats.ru/assets/img/items/16266159841jgWUXBfbA.jpg"
					},
					{
						"name": "Чипа",
						"price": "310",
						"text": "Краб, масаге, сл. сыр, огурец, спайси соус",
						"imgPath": "https://halaleats.ru/assets/img/items/1626616012XIIaNKkGQj.jpg"
					},
					{
						"name": "Спайси лосось",
						"price": "310",
						"text": "Лосось, сл. сыр, огурец, спайси соус",
						"imgPath": "https://halaleats.ru/assets/img/items/1626616105N3jVSX3IgC.jpg"
					},
					{
						"name": "Спайси краб",
						"price": "310",
						"text": "Краб, сл. сыр, огурец, спайси соус",
						"imgPath": "https://halaleats.ru/assets/img/items/1626616056GWj5xymN3w.jpg"
					},
					{
						"name": "Хотто спйас лосось",
						"price": "310",
						"text": "Лосось, сл. сыр, огурец, спайси соус",
						"imgPath": "https://halaleats.ru/assets/img/items/1626615998cfrSBjZ49i.jpg"
					},
					{
						"name": "Хотто спайс краб",
						"price": "310",
						"text": "Краб, сл. сыр, огурец, спайси соус",
						"imgPath": "https://halaleats.ru/assets/img/items/1626615998cfrSBjZ49i.jpg"
					},
					{
						"name": "Запеченная филадельфия ",
						"price": "310",
						"text": "Лосось,сл. сыр, огурец, сырный соус",
						"imgPath": "https://halaleats.ru/assets/img/items/1597420872dMS6oSOxqZ.jpg"
					},
					{
						"name": "Запеченная калифорния",
						"price": "310",
						"text": "Краб, сл. сыр, огурец, сырный соус",
						"imgPath": "https://halaleats.ru/assets/img/items/1597420814TKKOeiTb1M.jpg"
					},
					{
						"name": "Запеченный сливочный ",
						"price": "310",
						"text": "Сл. сыр, огурец, унаги соус",
						"imgPath": "https://halaleats.ru/assets/img/items/15974257380XGLzVu5fs.jpg"
					},
					{
						"name": "Запеченный с угрем",
						"price": "310",
						"text": "Угорь, сл. сыр, огурец, сырный замес",
						"imgPath": "https://halaleats.ru/assets/img/items/1597425680yUIsJWVYjd.jpg"
					},
					// {
					// 	"name": "Запеченный с тунцом",
					// 	"price": "310",
					// 	"text": "Тунец, сл. сыр, огурец, сырный замес",
					// 	"imgPath": "42"
					// },
					{
						"name": "Запеченный с мидиями",
						"price": "310",
						"text": "Мидии, сл. сыр, огурец, сырный замес, унаги соус",
						"imgPath": "https://halaleats.ru/assets/img/items/15974257776CjeAORqQl.jpg"
					},
					{
						"name": "Запеченный окунь",
						"price": "310",
						"text": "Окунь, сл. сыр, огурец, сырный замес",
						"imgPath": "https://halaleats.ru/assets/img/items/1597420938pABNBR2lPN.jpg"
					},
					{
						"name": "Запеченный с коп. лососем",
						"price": "310",
						"text": "Коп. лосось, сл. сыр, огурец, сырный замес",
						"imgPath": "https://halaleats.ru/assets/img/items/15974209999KQAwIuNAU.jpg"
					},
					{
						"name": "Запеченный лосось и краб",
						"price": "310",
						"text": " Лосось, краб, сл. сыр, сырный замес",
						"imgPath": "https://halaleats.ru/assets/img/items/1597426138iae6iBXA8c.jpg"
					},
					// {
					// 	"name": "Запеченный с курицей",
					// 	"price": "310",
					// 	"text": "Курица, сл. сыр, огурец, помидор, сырный замес",
					// 	"imgPath": "23"
					// },
					{
						"name": "Запеченный с креветкой",
						"price": "310",
						"text": "Креветка, сл. сыр, огурец, сырный замес",
						"imgPath": "https://halaleats.ru/assets/img/various/blank-white.jpg"
					}
				]
			},
			{
				"name": "Жаренные ролы",
				"items": [
					{
						"name": "Темпура с лососем",
						"price": "310",
						"text": "Лосось, огурец, сл. сыр",
						"imgPath": "https://halaleats.ru/assets/img/items/1597426526kMN9r5gVv2.jpg"
					},
					{
						"name": "Темпура с крабом",
						"price": "310",
						"text": "Краб, огурец, сл. сыр",
						"imgPath": "https://halaleats.ru/assets/img/items/1597426428TlwnU74cDU.jpg"
					},
					// {
					// 	"name": "Темпура калифорния",
					// 	"price": "310",
					// 	"text": "Краб, огурец, сл. сыр, спайси соус",
					// 	"imgPath": "4"
					// },
					{
						"name": "Инь-янь",
						"price": "320",
						"text": "Лосось, помидор, сл. сыр, сыр гауда, масаге",
						"imgPath": "https://halaleats.ru/assets/img/items/1608116939KtiWnVJxft.jpg"
					},
					{
						"name": "Темпура пирамида",
						"price": "310",
						"text": "Лосось, краб, сл. сыр, огурец",
						"imgPath": "https://halaleats.ru/assets/img/items/1597426776PuS98KrDUT.jpg"
					},
					{
						"name": "Темпура курица",
						"price": "310",
						"text": "Курица, сл. сыр, огурец, помидор, спайси соус, масаге",
						"imgPath": "https://halaleats.ru/assets/img/items/1597426848xLAH02b0lg.jpg"
					},
					{
						"name": "Темпура угорь",
						"price": "310",
						"text": "Угорь, сл. сыр, огурец, кунжут, унаги соус",
						"imgPath": "https://halaleats.ru/assets/img/items/1597426736TUElAW6YA6.jpg"
					},
					{
						"name": "Темпура с тунцом",
						"price": "310",
						"text": "Тунец, огурец, сл. сыр, спайси соус, кунжут",
						"imgPath": "https://halaleats.ru/assets/img/items/1608117917W6u6JsHYua.jpg"
					}
				]
			},
			{
				"name": "Классические роллы",
				"items": [
					{
						"name": "Классические роллы ",
						"price": "120",
						"text": "",
						"imgPath": "https://halaleats.ru/assets/img/items/15974280902dKBmPYN8N.jpg"
					},
					{
						"name": "Классическеи роллы с крабом",
						"price": "100",
						"text": "",
						"imgPath": "https://halaleats.ru/assets/img/items/15974280902dKBmPYN8N.jpg"
					},
					{
						"name": "Классические роллы с огурцом ",
						"price": "70",
						"text": "",
						"imgPath": "https://halaleats.ru/assets/img/items/15974280902dKBmPYN8N.jpg"
					},
					{
						"name": "Классические роллы с  масаго",
						"price": "70",
						"text": "",
						"imgPath": "https://halaleats.ru/assets/img/items/15974280902dKBmPYN8N.jpg"
					}
				]
			},
			{
				"name": "Сеты",
				"items": [
					{
						"name": "Медовые водопады 72шт",
						"price": "2170",
						"text": "\"Запеченный лосось<br>Запеченный сливочный<br>Темпура краб<br>Темпура курица<br>Калифорния<br>Филадельфия<br>Ронии<br>Пиромида<br>Калифорния креветка\"",
						"imgPath": "https://halaleats.ru/assets/img/items/159742738369a7sUVKZX.jpg"
					},
					{
						"name": "Запеченный 40шт",
						"price": "1250",
						"text": "\"Запеченная филадельфия<br>Запеченная калифорния<br>Запеченный сливочный<br>Запеченный тунец<br>Запеченный окунь\"",
						"imgPath": "https://halaleats.ru/assets/img/items/1608440802FKk8PUrcsg.jpg"
					},
					{
						"name": "Джункай 48шт",
						"price": "1550",
						"text": "\"Филадельфия гриль<br>Филадельфия тунец<br>Запеченный окунь<br>запеченная калифорния<br>Инь-Янь<br>Майами\"",
						"imgPath": "https://halaleats.ru/assets/img/items/1608440789ETYs9b4AJu.jpg"
					},
					{
						"name": "Рим-Гора 48шт",
						"price": "1550",
						"text": "\"Филадельфия<br>Калифорния<br>Ронин<br>Запеченный окунь<br>Терезинский вечер<br>Темпура лосось\"",
						"imgPath": "https://halaleats.ru/assets/img/items/159742767262wHqMp0R3.jpg"
					},
					{
						"name": "Филадельфия 24шт",
						"price": "800",
						"text": "\"Филадельфия<br>Филадельфия с крабом<br>Филадельфия с креветкой\"",
						"imgPath": "https://halaleats.ru/assets/img/items/1597427060X1xdg0ZrXG.jpg"
					},
					{
						"name": "Горячий 24шт",
						"price": "800",
						"text": "\"Темпура с крабом<br>Темпура с креветкой<br>Запеченный с лососем\"",
						"imgPath": "https://halaleats.ru/assets/img/items/1597427968L9z6YRT853.jpg"
					},
					{
						"name": "Учкекен 40шт",
						"price": "1250",
						"text": "\"Филадельфия<br>Калифорния лосось<br>Учкекенский понт<br>Сливочный запеченный <br>Темпура чикен\"",
						"imgPath": "https://halaleats.ru/assets/img/items/1597427906fTMrr1oMqn.jpg"
					},
					{
						"name": "Общий 32шт",
						"price": "1000",
						"text": "\"Филадельфия<br>Запеченный с лососем<br>Темпура с крабом<br>Канада\"",
						"imgPath": "https://halaleats.ru/assets/img/items/1597427504pE0SkSwT7C.jpg"
					},
					{
						"name": "Джанго 28шт",
						"price": "650",
						"text": "\"Филадельфия<br>Калифорния<br>Классический с огурцом<br>Классический с крабом\"",
						"imgPath": "https://halaleats.ru/assets/img/items/1608440821ywErXndZVB.jpg"
					},
					{
						"name": "Классический 24шт",
						"price": "300",
						"text": "\"С лососем<br>С огурцом<br>С крабом<br>С масаго\"",
						"imgPath": "https://halaleats.ru/assets/img/items/1597427743dpgLsEPCOc.jpg"
					}
				]
			}
		],
		activeCategory: 0
	},
	mounted() {
		document.addEventListener('scroll', () => {

		})
	},
})

jQuery(document).ready(function($){
	$(window).on('scroll', function(){
		var sc = $(this).scrollTop();
		if(sc > $('.nav-spacer').offset().top){
			$('.nav').addClass('fixed')
		}else{
			$('.nav').removeClass('fixed')
		}
	})

	//mnu
	var menu_selector = ".nav"; 
	function onScroll(){
	    var scroll_top = $(document).scrollTop();
	    $(menu_selector + " a").each(function(){
	        var hash = $(this).attr("href");
	        var target = $(hash);
	        if (target.position().top - 20 <= scroll_top && target.position().top - 20 + target.outerHeight() > scroll_top) {
	            $(menu_selector + " a.active").removeClass("active");
	            $(this).addClass("active");
	        } else {
	            $(this).removeClass("active");
	        }
	    });
	}
	 
	$('.items-list .btn').on('click', function(e){
		e.preventDefault()
		$(this).next().addClass('act')
		$(this).hide()
	})

	$(document).on("scroll", onScroll);
	 
	$(".nav a[href^=#]").click(function(e){
	        e.preventDefault();
	 
	        $(document).off("scroll");
	        $(menu_selector + " a.active").removeClass("active");
	        $(this).addClass("active");
	        var hash = $(this).attr("href");
	        var target = $(hash);
	 
	        $("html, body").animate({
	            scrollTop: target.offset().top
	        }, 500, function(){
	            window.location.hash = hash;
	            $(document).on("scroll", onScroll);
	        });
	});

	$('.minus').click(function () {
                var $input = $(this).parent().find('input');
                var count = parseInt($input.val()) - 1;
                count = count < 0 ? 0 : count;
                $input.val(count);
                $input.change();
                return false;
  });
  $('.plus').click(function () {
                var $input = $(this).parent().find('input');
                $input.val(parseInt($input.val()) + 1);
                $input.change();
                return false;
  });
	 

});

class Busket {
	constructor(items = {}) {
		// items = {
		// 	key: {
		// 		name: 'string',
		// 		count: 1,
		// 		price: 2,
		//    text: "string"
		// 	}
		// }
		this.items = items
		this.loadFromLs()
		Object.values(this.items).forEach(item => {
			this.renderItem(item.key)
		})
	}
	clear() {
		this.items = {}
		this.updateView()
	}
	firstAdd(key, { name, count, price }) {
		this.items[key] = {
			name,
			count,
			price,
			key
		}
		this.updateView()
	}
	add(key, count = 1) {
		if (!this.items[key]) return
		this.items[key].count += count
		this.updateView()
	}
	delete(key, count = 1) {
		if (!this.items[key] || this.items[key].count  == 0 ) return
		this.items[key].count -= count
		this.updateView()
	}
	get(key) {
		if (!this.items[key]) return
		return this.items[key]
	}
	getAllSum() {
		return Number(Object.values(this.items).reduce((acc, val) => {
			return acc += val.price * val.count
		}, 0))
	}
	getAllCount() {
		return Object.values(this.items).reduce((acc, val) => {
			return acc += val.count
		}, 0)
	}
	toString({ city, street }) {
		const br = `%0a‎`
		let text = `Заказ из приложения Хас-Хус: Товары ${br}`
		text += Object.values(this.items).reduce((acc, val) => (
			acc += `${val.name} - ${val.price * val.count} Р за ${val.count} шт.`
		), "")
		text += br
		if (city && street) {
			text += `Доставка по адресу: Г. ${city} Ул. ${street} ${br}`
			text += `Стоимость доставки: ${getDelyveryPrice()} Р ${br}`
			text += `Комментарий: ${document.querySelector('.comment').value} ${br}`
		}
		let price = this.getAllSum() + getDelyveryPrice()
		text += "Итого: " + price + " Р"
		return text
	}
	updateView() {
		const totalbx = document.querySelector(".total-bx")
		if (totalbx) {
			if (this.getAllCount() <= 0) {
				totalbx.style.display = "none"
			} else {
				totalbx.style.display = "flex"
			}
			document.querySelector(".total-bx .price").innerHTML = `${this.getAllCount()} Товара  |  ${this.getAllSum()} P`
		}
		this.saveToLs()
	}
	renderItem(key) {
		const busketList = document.querySelector(".basket-list")
		if (!busketList) return
		const { name, price, count } = this.get(key)
		let item = `
		<li data-key="${key}">
			<div class="name">${name}</div>
			<div class="right">
				<div class="number-bx">
					<span class="minus">-</span>
					<input type="text" value="${count}" size="5">
					<span class="plus">+</span>
				</div>
			<div class="price">${price * count} P</div>
			</div>
		</li>`
		busketList.insertAdjacentHTML('beforeend', item)
	}
	saveToLs() {
		localStorage.setItem('busket', JSON.stringify(this.items))
	}
	loadFromLs() {
		const json = localStorage.getItem('busket')
		if (!json) return
		this.items = JSON.parse(json)
	}
}

const busket = new Busket()

function getChildIndex(node) {
  return Array.prototype.indexOf.call(node.parentNode.childNodes, node);
}

function getDataFromParent(parent) {
	let categoryParent = parent.parentElement.parentElement
	let key = categoryParent.id + getChildIndex(parent)
	return {
		name: parent.querySelector(".t1").textContent,
		price: Number(parent.querySelector(".t3").textContent.replace(/[^0-9]/g,"")),
		text: parent.querySelector(".t2").textContent,
		key
	}
}

document.addEventListener("DOMContentLoaded", () => {
	busket.updateView()
	updateBusketTwo()
	document.querySelectorAll(".items-list .btn").forEach(btn => {
		btn.addEventListener("click", e => {
			e.preventDefault()
			const parent = 	btn.parentElement.parentElement
			const { name, price, text, key } = getDataFromParent(parent)
			if (!busket.get(key)) {
				busket.firstAdd(key, {
					name,
					price,
					text,
					count: 0,
				})
			}
			busket.add(key)
		})
	})

	document.querySelectorAll(".items-list .plus").forEach(plus => {
		plus.addEventListener("click", e => {
			e.preventDefault()
			const parent = 	plus.parentElement.parentElement.parentElement
			const { key } = getDataFromParent(parent)
			busket.add(key)
		})
	})

	document.querySelectorAll(".items-list .minus").forEach(minus => {
		minus.addEventListener("click", e => {
			e.preventDefault()
			const parent = 	minus.parentElement.parentElement.parentElement
			const { key } = getDataFromParent(parent)
			busket.delete(key)
		})
	})

	document.querySelectorAll(".basket-list .plus").forEach(plus => {
		plus.addEventListener("click", e => {
			e.preventDefault()
			const parent = 	plus.parentElement.parentElement.parentElement
			busket.add(parent.dataset.key)
			const { price, count } = busket.get(parent.dataset.key)
			parent.querySelector(".price").innerHTML = price * count + " P"
			updateBusketTwo()
		})
	})

	document.querySelectorAll(".basket-list .minus").forEach(minus => {
		minus.addEventListener("click", e => {
			e.preventDefault()
			const parent = 	minus.parentElement.parentElement.parentElement
			busket.delete(parent.dataset.key)
			const { price, count } = busket.get(parent.dataset.key)
			parent.querySelector(".price").innerHTML = price * count + " P"
			updateBusketTwo()
		})
	})
	const sendEl = document.querySelector(".send")
	if(sendEl) {
		sendEl.addEventListener("submit", e => {
			e.preventDefault()
			const phone = "+79380312109"
			let text = busket.toString({
				city: document.querySelector("select")?.value,
				street: document.querySelector(".street")?.value
			})
			window.open(
				`https://wa.me/${phone}?text=${text}`,
				'_blank' // <- This is what makes it open in a new window.
			);
			busket.clear()
		})
	}

	const selectEl = document.querySelector(".select")
	if(selectEl) {
		selectEl.addEventListener("change", () => {
			updateBusketTwo()
		})
	}
})

function updateBusketTwo() {
	if (!document.querySelector(".res")) return
	let deliveryPrice = getDelyveryPrice()
	if (deliveryPrice === undefined) return
	document.querySelector(".res").innerHTML = busket.getAllSum() + " P"
	if (!deliveryPrice) {
		deliveryPrice = 0
		document.querySelector(".res3").innerHTML = "-"
		document.querySelector(".res2").innerHTML = "-"
		return
	}
	document.querySelector(".res3").innerHTML = deliveryPrice + " P"
	document.querySelector(".res2").innerHTML = busket.getAllSum() + deliveryPrice + " P"
}

function getDelyveryPrice() {
	let deliveryPrice = document.querySelector("select")?.selectedOptions[0]?.dataset.price
	return Number(deliveryPrice)
}