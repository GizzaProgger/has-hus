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
	        if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
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
		return Object.values(this.items).reduce((acc, val) => {
			return acc += val.price * val.count
		}, 0)
	}
	getAllCount() {
		return Object.values(this.items).reduce((acc, val) => {
			return acc += val.count
		}, 0)
	}
	toString({ city, street }) {
		let text = `Заказ из приложения Хас-Хус: Товары \n\n`
		text += Object.values(this.items).reduce((acc, val) => (
			acc += `${val.name} - ${val.price * val.count} за ${val.count} шт.`
		), "")
		text += "\n\n"
		if (city && street) {
			text += `Доставка по адресу: Г. ${city} Ул. ${street} \n\n`
		}
		text += "Итого: " + this.getAllSum() + " Р"
		console.log(text)
		return text
	}
	updateView() {
		const totalbx = document.querySelector(".total-bx")
		if (totalbx) {
			if (Object.values(this.items).length === 0) {
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
	document.querySelector(".send").addEventListener("submit", e => {
		e.preventDefault()
		const phone = "+79991892320"
		let text = busket.toString({
			city: document.querySelector("select")?.value,
			street: document.querySelector(".street")?.value
		})
		window.open(
			`https://wa.me/${phone}?text=${text}`,
			'_blank' // <- This is what makes it open in a new window.
		);
	})
})

function updateBusketTwo() {
	if (!document.querySelector(".res")) return
	document.querySelector(".res").innerHTML = busket.getAllSum() + " P"
	document.querySelector(".res2").innerHTML = busket.getAllSum() + 189 + " P"
}