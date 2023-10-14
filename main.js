$(document).ready(function(){

    main(); //invoca a function principal

    function main(){ //function principal invocando todas as demais
        slideButton();
        adicionarTarefa();
        tarefaConcluida();
    }

    function slideButton(){ //responsavel pelo efeito de slide no button
        $('#addTask-btn').click(function(){     //event de slide down no btn adicionar tarefa
            $('.add-task-container').slideDown(100);
        })
    
        $('.cancelar-task').click(function(){   //event de slide up no btn cancelar
            $('.add-task-container').slideUp(100);
        })
    }

    function adicionarTarefa(){ //responsavel por adicionar uma nova task na ul
        $('form').on("submit",function(e){ //event de click no submit do form
            e.preventDefault(); //cancela o reload do submit
    
            const inputTask = $('#input-add-task').val(); //coleta o value do input
            const novaTask = $('<li class="task-box" style="display= none;"></li>'); //cria uma nova coluna na listagem. possui display none
    
            //criação conteudo do li (novaTask). pega o valor do input e escreve no <p>
            $(` 
                <img class="imgTask" src="./imgs/taskbox.png" alt="">
                <p class="task">${inputTask}</p>
                <audio id="finish-task" src="./audios/plim.mp3"> </audio>
            `).appendTo(novaTask); //da um innerHTML do conteudo no li (escreve o conteudo no novaTask)
    
            novaTask.appendTo('ul'); //escreve no ul esse novaTask com conteudo dentro
            novaTask.fadeIn(1000); //executa o efeito de fadein, fazendo o todo o conteudo do novaTask surgir na tela
    
            $('#input-add-task').val(''); //limpa o valor de dentro do input
        })
    }

    function tarefaConcluida() { //responsavel por "riscar" as tasks terminadas clicando nelas e invocar a fuction de audio
        $('ul').on('click', '.task-box', function () { //evento de click na .task-box (o li), delegando pro ul por meio do método .on

            playAudio(); //invoca a function responsavel pelo efeito de som

            const tarefaClicada = $(this); //seleciona o elemento clicado, no caso o .task-box
            const imgTask = tarefaClicada.find('.imgTask'); //busca dentro de .task-box a classe .imgTask (a nossa img)

            tarefaClicada.find('.task').addClass('taskComplete'); //busca dentro de .task-box a classe .task e adiciona a classe .taskComplete. É como o classList.add
            imgTask.attr('src', './imgs/taskboxOK.png');//usa a function .attr pra selecionar o atributo src de .imgTask e inserir uma nova URL
        });
    }

    function playAudio() { //responsavel por dar play no som
        const audio = document.getElementById('finish-task'); // seleciona o id do efeito
        audio.currentTime = 0; // faz o audio repetir do inicio quando é clicado
        audio.play(); // da play no audio
    }
    
})