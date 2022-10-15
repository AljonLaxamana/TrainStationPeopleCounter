let countEl = document.getElementById("people-counter")
let entriesEl = document.getElementById("entries")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
    console.log(count)
}

function save() {
    console.log(count)
    entriesEl.textContent += count + " - "
    countEl.textContent = 0
    count = 0
}
