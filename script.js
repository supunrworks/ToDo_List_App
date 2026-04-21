const txttask = document.getElementById("txttask");
const sub = document.getElementById("sub");
const result = document.getElementById("results");

sub.addEventListener("click", (e) => {
    if (txttask.value.length > 0) {
        e.preventDefault()
        const listitem = document.createElement("li");
        const additem = document.createElement("span");
        const delbtn = document.createElement("button");
        const donebtn = document.createElement("button");

        additem.classList.add("item");
        additem.innerText = txttask.value;

        delbtn.classList.add("del");
        delbtn.innerText = "Delete";

        donebtn.classList.add("done");
        donebtn.innerText = "Done";


        listitem.appendChild(additem);
        listitem.appendChild(donebtn);
        listitem.appendChild(delbtn);
        result.appendChild(listitem);

        delbtn.addEventListener("click", () => {
            result.removeChild(listitem)
        })

        donebtn.addEventListener("click", () => {
            const span = listitem.querySelector(".item");
            span.style.color = "gray";
            span.style.textDecoration = "line-through";
        })

        txttask.value = ""
        txttask.focus()
    } else {
        e.preventDefault()
    }

})