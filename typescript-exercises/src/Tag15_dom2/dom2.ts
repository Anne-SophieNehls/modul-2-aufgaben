const selectElement = document.getElementById("farbeAuswahlen") as HTMLSelectElement

selectElement?.addEventListener("change", (event: Event) => {
    console.log(event);
    const select = event.target as HTMLSelectElement
    selectElement.remove(select.value.);
 })
 