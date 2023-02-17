let contagem = 0
const valor = document.querySelector("#valor")
const btns = document.querySelectorAll(".btn")

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
	const styles = e.currentTarget.classList
	if (styles.contains("diminuir")) {
	    contagem--
	} else if (styles.contains("aumentar")) {
	    contagem++
	} else {
	    contagem = 0
	}
	if (contagem > 0) {
	    valor.style.color = "green"
	}
	if (contagem < 0) {
	    valor.style.color = "red"
	}
	if (contagem === 0) {
	    valor.style.color = "black"
	}
	valor.textContent = contagem
    })
})
