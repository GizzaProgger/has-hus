// register modal component
Vue.component("modal", {
	template: "#modal-template",
	methods: {
		closeModal($event) {
			if($event?.target.classList.contains('modal-wrapper')){
				this.$emit('close')
			}			
		}
	}
});

class Busket {
	constructor(items = {}) {
		this.items = items
		this.loadFromLs()
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
		this.saveToLs()
	}
	add(key, count = 1) {
		if (!this.items[key]) return
		this.items[key].count += count
		this.saveToLs()
	}
	delete(key, count = 1) {
		if (!this.items[key] || this.items[key].count  == 0 ) return
		this.items[key].count -= count
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
		let text = `Заказ из приложения Байрам: Товары ${br}`
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
	saveToLs() {
		localStorage.setItem('busket', JSON.stringify(this.items))
	}
	loadFromLs() {
		const json = localStorage.getItem('busket')
		if (!json) return
		this.items = JSON.parse(json)
	}
}

const vue = new Vue({
	el: "#wrapper",
	data: {
		categories: [
			{
				"name": "Сладкое",
				"items": [
					{
						"name": "Сметанник",
						"price": "46",
						"text": "",
						"imgPath": "https://halaleda.ru/uchkeken/gorskipekar/img/smetannik.webp"
					},
					{
						"name": "Шарлотка",
						"price": "46",
						"text": "",
						"imgPath": "https://halaleda.ru/uchkeken/gorskipekar/img/applesharlotka.webp"
					},
					{
						"name": "Пирожок с вишней",
						"price": "43",
						"text": "",
						"imgPath": "https://halaleda.ru/uchkeken/gorskipekar/img/pirozokvishnya.webp"
					},
					{
						"name": "Гребешок с яблоком",
						"price": "29",
						"text": "",
						"imgPath": "https://halaleda.ru/uchkeken/gorskipekar/img/grebeshok-apple.webp"
					},
					{
						"name": "Ягодный мешочек",
						"price": "43",
						"text": "",
						"imgPath": "https://halaleda.ru/uchkeken/gorskipekar/img/berriesmeshok.webp"
					},
					{
						"name": "Улитка с корицей",
						"price": "36",
						"text": "",
						"imgPath": "https://halaleda.ru/uchkeken/gorskipekar/img/ulitka.webp"
					},
					{
						"name": "Маковник",
						"price": "54",
						"text": "",
						"imgPath": "https://halaleda.ru/uchkeken/gorskipekar/img/makovik.webp"
					},
				],
			},
			{
				"name": "Пирожки",
				"items": [
					{
						"name": "Пирожок с капустой",
						"price": "24",
						"text": "",
						"imgPath": "https://halaleda.ru/uchkeken/gorskipekar/img/pirozokkapusta.webp"
					},
					{
						"name": "Пирожок с яйцом и зеленым луком",
						"price": "45",
						"text": "",
						"imgPath": "https://halaleda.ru/uchkeken/gorskipekar/img/pirozokeggzelen.webp"
					},
					{
						"name": "Пирожок с картофелем и с луком",
						"price": "31",
						"text": "",
						"imgPath": "https://halaleda.ru/uchkeken/gorskipekar/img/pirozokpotatoeszelen2.webp"
					},
					{
						"name": "Эчпочмак",
						"price": "43",
						"text": "",
						"imgPath": "https://halaleda.ru/uchkeken/gorskipekar/img/echpomak.webp"
					},
					{
						"name": "Пирожок с мясом и капустой",
						"price": "36",
						"text": "",
						"imgPath": "https://halaleda.ru/uchkeken/gorskipekar/img/pirozokmeatkapusta.webp"
					},
					{
						"name": "Хачапури с сыром",
						"price": "46",
						"text": "",
						"imgPath": "https://halaleda.ru/uchkeken/gorskipekar/img/hachapuri.webp"
					},
					{
						"name": "Пирожок с курицей и сыром",
						"price": "54",
						"text": "",
						"imgPath": "https://halaleda.ru/uchkeken/gorskipekar/img/pirozokchickencheese.webp"
					},
					{
						"name": "Пирожок курочка ряба",
						"price": "54",
						"text": "",
						"imgPath": "https://halaleda.ru/uchkeken/gorskipekar/img/pirozokryaba.webp"
					},
				],
			},
			{
				"name": "Пиццы",
				"items": [
					{
						"name": "Пицца большая с курицй и грибами",
						"price": "250",
						"text": "",
						"imgPath": "https://halaleda.ru/uchkeken/gorskipekar/img/big-classik-pizza.webp"
					},
					{
						"name": "Пицца большая с колбасой и грибами",
						"price": "250",
						"text": "",
						"imgPath": "https://halaleda.ru/uchkeken/gorskipekar/img/big-classik-pizza.webp"
					},
					{
						"name": "Пицца с курицей и грибами",
						"price": "120",
						"text": "",
						"imgPath": "https://halaleda.ru/uchkeken/gorskipekar/img/big-classik-pizza.webp"
					},
					{
						"name": "Пицца с колбасой и грибами",
						"price": "120",
						"text": "",
						"imgPath": "https://halaleda.ru/uchkeken/gorskipekar/img/big-classik-pizza.webp"
					},
					{
						"name": "Курица по-польски",
						"price": "115",
						"text": "Куриное филе, сыр и помидоры",
						"imgPath": "https://halaleda.ru/uchkeken/gorskipekar/img/big-classik-pizza.webp"
					},
				],
			},
			{
				"name": "Хычины",
				"items": [
					{
						"name": "Хычин с мясом",
						"price": "80",
						"text": "",
						"imgPath": "https://halaleda.ru/uchkeken/gorskipekar/img/meathichin.webp"
					},
					{
						"name": "Хычин с творогом и сыром",
						"price": "80",
						"text": "",
						"imgPath": "https://halaleda.ru/uchkeken/gorskipekar/img/tvorogcheese.webp"
					}
				],
			},
			{
				"name": "Хлебы",
				"items": [
					{
						"name": "Хлеб Пшеничный",
						"price": "28",
						"text": "",
						"imgPath": "https://halaleda.ru/uchkeken/gorskipekar/img/whitebread.webp"
					},
					{
						"name": "Хлеб Чесночный",
						"price": "35",
						"text": "",
						"imgPath": "https://halaleda.ru/uchkeken/gorskipekar/img/chesnochnii.webp"
					},
					{
						"name": "Хлеб Льняной",
						"price": "38",
						"text": "",
						"imgPath": "https://halaleda.ru/uchkeken/gorskipekar/img/lnianoy.webp"
					},
					{
						"name": "Багет особый",
						"price": "30",
						"text": "",
						"imgPath": "https://halaleda.ru/uchkeken/gorskipekar/img/baget-special.webp"
					},
				],
			}
		],

		activeCategory: 0,
		currentProduct: null,
		currentProductKey: null,
		currentOption: null,
		showModal: false,
		showImg: null,
		busket:  new Busket(),
		activeCityDOMLink: null
	},
	computed: {
		productHasOptions() {
			return this.currentProduct?.options
		},
		productPrice() {
			const product = this.currentProduct
			let price = product.price
			if(this.currentOption !==null && product?.options?.items) {
				const option = product.options.items[this.currentOption]
				if(option) {
					price = option?.price
				}				
			}
			return price
		}
	},
	methods: {
		busketMinus(key) {
			this.busket.delete(key)
			this.$forceUpdate()
			updateBusketTwo()
		},
		busketPlus(key) {
			this.busket.add(key)
			this.$forceUpdate()
			updateBusketTwo()
		},
		addProduct(product, key) {
			this.currentProduct = product
			this.currentProductKey = key
			if(this.productHasOptions) return this.showModal = true
			if (this.busket.get(key)) {
				this.busket.add(key)
			} else {
				this.busket.firstAdd(key, {
					name: product.name,
					count: 1,
					price: product.price
				})
			}
			this.$forceUpdate()
		},
		addToOrder() {
			const item = this.busket.get(this.currentProductKey)
			const product = this.currentProduct
			if(this.currentOption !==null && product?.options?.items) {
				const option = product.options.items[this.currentOption]
				if(option) {
					item.name += ` (${option?.title})`
					item.price = option?.price
					this.busket.saveToLs()
				}				
			}
			this.showModal = false

		},
	},
	mounted() {
		document.addEventListener('scroll', () => {

		})
	},
})

document.addEventListener('DOMContentLoaded', () => {
	const selectEl = document.querySelector(".select")
	if(selectEl) {
		selectEl.addEventListener("change", () => {
			console.log("select")
			updateBusketTwo()
		})
	}
	const sendEl = document.querySelector(".send")
	if(sendEl) {
		sendEl.addEventListener("submit", e => {
			e.preventDefault()
			if(checkDelyveryPrice()){
				const phone = "+79380312109"
				let text = vue.busket.toString({
					city: document.querySelector("select")?.value,
					street: document.querySelector(".street")?.value
				})
				window.open(
					`https://wa.me/${phone}?text=${text}`,
					'_blank' // <- This is what makes it open in a new window.
				);
				busket.clear()
			}
		})
	}
})

function updateBusketTwo() {
	setTimeout(checkDelyveryPrice, 100)
	if (!document.querySelector(".res")) return
	let deliveryPrice = getDelyveryPrice()
	if (deliveryPrice === undefined) return
	document.querySelector(".res").innerHTML = vue.busket.getAllSum() + " P"
	if (!deliveryPrice) {
		document.querySelector(".res3").innerHTML = "-"
		// document.querySelector(".res2").innerHTML = "-"
		// return
	}
	document.querySelector(".res3").innerHTML = deliveryPrice + " P"
	document.querySelector(".res2").innerHTML = vue.busket.getAllSum() + deliveryPrice + " P"
	
}

function getDelyveryPrice() {
	const data = document.querySelector("select")?.selectedOptions[0]?.dataset || {}
	let deliveryPrice = data.price
	const freePrice = data.freePrice
	const price = vue.busket.getAllSum()
	if(freePrice && price >= freePrice) {
		deliveryPrice = 0	
	}
	return Number(deliveryPrice) || 0
}

function checkDelyveryPrice(selectEl) {
	selectEl = selectEl || document.querySelector("select")
	if(!selectEl) { return }
	const data = selectEl?.selectedOptions[0]?.dataset || {}
	const fromPrice = data.fromPrice
	const price = vue.busket.getAllSum()
	const mesEl = selectEl?.parentElement.querySelector('.form-error')	
	if(price < fromPrice) {
		mesEl.innerHTML = `Доставка в данный населенный пункт от: ${fromPrice} рублей`
		mesEl.style.display = 'block'
		return false
	} else {
		mesEl.style.display = 'none'
		return true
	}
}

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
	 
	$('.offer-card__button').on('click', function(e){
		e.preventDefault()
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
});