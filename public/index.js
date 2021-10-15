// contribution by larrick

const githubLink = "https://raw.githubusercontent.com/OSCA-Ado-Ekiti/Hacktoberfest2021-Ekiti/main/participants.json";

$(document).ready(() => {

    $.getJSON(githubLink, (res) => {
        let data = res.participants;

        $('#totalPart').html(`Participants ${data.length}`);

        data.map((e, i) => {
            // get github user profile image / icon
            let participantAvatar = `${e["GitHub Profile"]}.png`

            $('#participantContainer')
                .append(`
                <div class="cardData" id="cardData${i}" name="${e.Name}">
                    <div class="card" id="card${i}" style='background-image: url(${participantAvatar})'></div>
                    <span class="contributorName">${e.Name}</span>
                </div>
                `)

            $(`#cardData${i}`).hover(function () {
                $(`.cd${i}`).css({
                    flexDirection: "column",
                    width: "400px",
                    marginTop: "5%"
                }).toggle()
            })

            $(`<div class="contributorDetails cd${i}" id="details${i}">
                    <span>Name: ${e.Name}</span>
                    <span>Nickname: ${e.Nickname}</span>
                    <span>Tech Stack: ${e["Tech Stack"]}</span>
                    <span>Experience Level in OSS: ${e["Experience Level in OSS"]}</span>
                    <span>Twitter Handle: ${e["Twitter Handle"]}</span>
                    <span>GitHub Profile: ${e["GitHub Profile"]}</span>
                    <span>Which niche do you like contributing too?: ${e["Which niche do you like contributing too?"]}</span> 
            </div>`).appendTo(`#cardData${i}`)
        })
    })
});
