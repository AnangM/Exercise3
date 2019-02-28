var planets =   {
    "name": "Alderaan", 
    "rotation_period": "24", 
    "orbital_period": "364", 
    "diameter": "12500", 
    "climate": "temperate", 
    "gravity": "1 standard", 
    "terrain": "grasslands, mountains", 
    "surface_water": "40", 
    "population": "2000000000", 
    "residents": [
        "https://swapi.co/api/people/5/", 
        "https://swapi.co/api/people/68/", 
        "https://swapi.co/api/people/81/"
    ], 
    "films": [
        "https://swapi.co/api/films/6/", 
        "https://swapi.co/api/films/1/"
    ], 
    "created": "2014-12-10T11:35:48.479000Z", 
    "edited": "2014-12-20T20:58:18.420000Z", 
    "url": "https://swapi.co/api/planets/2/"
}

window.onload = displayAll();

function displayAll(){

    for(var key in planets){
        $('#main-table').append("<tr><td>"+key+"</td><td>:</td><td class='item" + key +"'></td></tr>");
        $('#data-selector').append("<option value='" +key+ "'>" +key+ "</option>");
        var value = Object.getOwnPropertyDescriptor(planets, key).value;
        if(value.constructor == Array){
            value.forEach(function(item){
                $('.item' + key).append(item + "<br>");
            })
        }else{
            $('.item' + key).append(value);
        }
    }   
}

$("#btn-filter").on("click",function(e){
    e.preventDefault();
    var selected = $('#data-selector').find(':selected').text();
    var selected_value = Object.getOwnPropertyDescriptor(planets,selected).value;
    $('#modal-title').text(selected);
    $('#modal-table').append("<tr><td>"+selected+"</td><td>:</td><td class='modal-tb-item'></td></tr>");
    if(selected_value.constructor == Array){
        $(".modal-tb-item").html("<div class='tb-item'>");
        selected_value.forEach(function(item){
            $('.tb-item').append(item + "<br>");
        })
    }else{
        $(".modal-tb-item").html("<div class='tb-item'>");
        $('.tb-item').append(selected_value);

    }
    $("#modal").modal('show');
});


$('.close-modal').on("click",function(){
    $("#modal").modal('hide');
    console.log("click");
    $("#modal-table").empty();
})