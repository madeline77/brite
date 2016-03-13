function Calender(el, file) {

    $.getJSON(file, function (data) {

        $.each(data, function (k, v) {
            var tr = $("<tr>");
            var td = $("<td>").text(v.time);
            tr.append(td);
            var td2 = $("<td>");

            $.each(v.task, function (key, task) {

                var div = $("<div />").addClass("item").addClass(task.color).text(task.name);
                div.on("click", function () {
                    var till = tr.next().children(":first-child").text();
                    $('.item').removeClass("highlight");
                    $('.time').text(v.time + " - " + till);
                    $('.task').text(task.name);
                    $('.desc').text(task.desc);
                    $('#color').removeClass().addClass(task.color);
                    $('.detail').addClass("show");
                    $('.table').addClass("showDetail");
                    $('.overlay').show();
                    $(this).addClass('highlight');
                });

                td2.append(div);
            })
            tr.append(td2);

            el.append(tr);
        });

        $('.item').each(function (index) {
            $(this).delay(500 * index).fadeIn("slow");
        });
    })
};


$(function () {

    var workCalender = new Calender($(".table1"), "data.json");
    var homeCalender = new Calender($(".table2"), "home.json");

    $('.close').on('click', function () {
        $('.detail').removeClass("show");
        $('.table').removeClass("showDetail");
        $('.overlay').hide();
    });

});