const yesClick = () => {
    document.getElementById("say-no").classList.add("hidden")
    document.getElementById("say-yes").classList.remove("hidden")
}

const noClick = () => {
    document.getElementById("say-no").classList.remove("hidden")
    document.getElementById("say-yes").classList.add("hidden")
}