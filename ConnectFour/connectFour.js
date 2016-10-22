var a, connectFour = (function () {
    var ballFalling, player, columns;

    function Player() {
        this.color = "blue";
    }

    var init = function () {
        player = new Player();

        var field = document.querySelector(".field");

        //Criando colunas com os círculos
        field.innerHTML = "";
        for (var i = 1; i <= 6; i++)
            field.innerHTML += '<div data-column>' + new Array(7).join('<div class="ball"></div>') + "</div>";

        columns = document.querySelectorAll("div[data-column]");

        for (var c = 0; c < columns.length; c++) {
            for (var ic = 0; ic < columns[c].childNodes.length; ic++) {
                var child = columns[c].childNodes[ic];
                child.column = c;
                child.index = ic;
            }

            columns[c].addEventListener("click", function () {
                if (ballFalling)
                    return;

                ballFalling = true;
                updateColumn(this);
            });
        }
    };

    function updateColumn(column) {
        var index = 0;
        var effect = setInterval(function () {
            if (index == 6 || column.childNodes[index].marked) {
                clearInterval(effect);
                ballFalling = false;

                if (index > 0) {
                    column.childNodes[index - 1].marked = player.color;
                    verifyWinner(column.childNodes[index - 1]);
                    player.color = player.color == "blue" ? "red" : "blue";
                }

                return;
            }

            if (index > 0)
                column.childNodes[index - 1].classList.remove(player.color);

            column.childNodes[index].classList.add(player.color);
            index++;
        }, 250);
    }

    function verifyWinner(ball) {
        //horizontal
        var length;
        for (var i = 0; i < 3; i++) {
            length = 0;
            for (var c = i; c < i + 4; c++)
                if (columns[c].childNodes[ball.index].marked == ball.marked)
                    length++;

            if (length == 4)
                break;
        }

        //vertical
        if (length != 4) {
            length = 0;
            for (var c = ball.index; c < ball.index + 4; c++)
                if (columns[ball.column].childNodes[c] && columns[ball.column].childNodes[c].marked == ball.marked)
                    length++;
        }

        if (length != 4) {
            
        }

        if (length == 4){
            alert(player.color + " wins!");
            connectFour.init();
        }
    }

    return {
        init: init
    };
})();
