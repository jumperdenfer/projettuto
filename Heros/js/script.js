//Affiche le descriptif du héros en fonction de la sélection
$('#action').click(function(){
    //Remplace div : #info
    $('#info').replaceWith('<div id="info"></div>');
    $('#loading').replaceWith('<div id="loading"><div id="fountainTextG"><div id="fountainTextG_1" class="fountainTextG">L</div><div id="fountainTextG_2" class="fountainTextG">o</div><div id="fountainTextG_3" class="fountainTextG">a</div><div id="fountainTextG_4" class="fountainTextG">d</div><div id="fountainTextG_5" class="fountainTextG">i</div><div id="fountainTextG_6" class="fountainTextG">n</div><div id="fountainTextG_7" class="fountainTextG">g</div><div id="fountainTextG_8" class="fountainTextG">.</div><div id="fountainTextG_9" class="fountainTextG"> </div><div id="fountainTextG_10" class="fountainTextG">.</div><div id="fountainTextG_11" class="fountainTextG"> </div><div id="fountainTextG_12" class="fountainTextG">.</div></div><img src="https://media.giphy.com/media/113xz7ree22qpW/giphy.gif"></div> ')
    $('#search').hide()
    $('#presentation').hide()
//Force le chargement di gif
    setTimeout(loading, 4000)
})

function loading(){
    var select = document.getElementById('editeur')
    var choix = select.options[select.selectedIndex].value
    var text = document.getElementById('combo').value

    $.ajax ({
        url: 'PHP/request.php',
        dataType:'json',
        data:'editeur=' + choix + '&id=' + text,
        method :  'GET'
    }).done(function(data) {
        for(var value in data) {
            $("#info").append("<p class='hidden'>" + value + ' : ' + data[value] + "</p>")
            $('#loading').empty()
            $("#search").show()
            $('#presentation').show()
        }
    })
}

//Affiche les dix derniers heros

$('#lien').click(function() {
    $('#info').replaceWith('<div id="info"></div>');
    $('#loading').replaceWith('<div id="loading"><div id="fountainTextG"><div id="fountainTextG_1" class="fountainTextG">L</div><div id="fountainTextG_2" class="fountainTextG">o</div><div id="fountainTextG_3" class="fountainTextG">a</div><div id="fountainTextG_4" class="fountainTextG">d</div><div id="fountainTextG_5" class="fountainTextG">i</div><div id="fountainTextG_6" class="fountainTextG">n</div><div id="fountainTextG_7" class="fountainTextG">g</div><div id="fountainTextG_8" class="fountainTextG">.</div><div id="fountainTextG_9" class="fountainTextG"> </div><div id="fountainTextG_10" class="fountainTextG">.</div><div id="fountainTextG_11" class="fountainTextG"> </div><div id="fountainTextG_12" class="fountainTextG">.</div></div><img src="https://media.giphy.com/media/113xz7ree22qpW/giphy.gif"></div> ')
    $('#search').hide()
    $('#presentation').hide()
    setTimeout(checkloading, 4000)
})

function checkloading() {
    $.ajax({
        url: 'PHP/requestPseudo.php',
		dataType:'JSON',
    }).done(function(result) {
        for(var keys in result) {
            $("#info").append("<li class='hero'>" + result[keys].pseudonyme + "</li>")
            $('#loading').empty()
            $("#search").show()
            $('#presentation').show()
        }
    })
}

//combo box
$('#editeur').change(function() {
    var select = document.getElementById('editeur')
	var choix = select.options[select.selectedIndex].value

    $('#combo').empty()
    $.ajax ({
        url: 'PHP/requestComboBox.php',
        dataType:'json',
        method :  'GET',
        data: 'editeur=' + choix
    }).done(function(data) {

        for(var value in data) {
            $("#combo").append('<option value="' + data[value].ID +'">' + data[value].pseudonyme + '</option>' );
        }
    })
})


//bouton accordeon
$('#accordeon').click(function() {
	$('#panel').toggleClass('reduc');
})
