// contribution by larrick

const githubLink = "https://raw.githubusercontent.com/OSCA-Ado-Ekiti/Hacktoberfest2021-Ekiti/main/participants.json";

$(document).ready(() => {

    $('.nav-list-item a').click(function () {
        $('body, html').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 1000)
    })

    $.getJSON(githubLink, (res) => {
        let data = res.participants;

        $('#totalPart').html(`Participants ${data.length}`);

        data.map((e, i) => {
            // get github user profile image / icon
            let participantAvatar = `${e["GitHub Profile"]}.png`

            $('#participantContainer')
                .append(`
                <div class="cardData" id="cardData${i}" name="${e.Name}">
                    <div class="data-box" id="card${i}" style='background-image: url(${participantAvatar})'></div>
                    <span class="contributorName" id="cbName${i}" >${e.Name}</span>
                </div>
                `)
            
            // $(`#details${i}`).css({
            //     "display": "flex", 
            // })

            $(`#cardData${i}`).hover(function (e) {
                $(`#details${i}`).toggle()
                $(`#card${i}, #cbName${i}`).toggle()
            })

            $(`<div class="contributorDetails" id="details${i}">
                    <span>Name: ${e.Name}</span><br/>
                    <span>Nickname: ${e.Nickname}</span><br/>
                    <span>Tech Stack: ${e["Tech Stack"]}</span><br/>
                    <span>Experience Level in OSS: ${e["Experience Level in OSS"]}</span><br/>
                    <span>Twitter Handle: ${e["Twitter Handle"]}</span><br/>
                    <span>GitHub Profile: ${e["GitHub Profile"]}</span><br/>
                    <span>Which niche do you like contributing too?: ${e["Which niche do you like contributing too?"]}</span> 
            </div>`).appendTo(`#cardData${i}`)
        })
    })
});
