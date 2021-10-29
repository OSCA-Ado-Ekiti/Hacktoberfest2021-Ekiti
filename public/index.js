/** contribution by https://github.com/larrick12 */

const githubLink = "https://raw.githubusercontent.com/OSCA-Ado-Ekiti/Hacktoberfest2021-Ekiti/main/participants.json";

$(document).ready(() => {

    $('.nav-list-item a').click(function () {
        $('body, html').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 1000)
    });


    $('#toggler').on('click', () => {
        if ($('#navIc').hasClass('fa-bars')) {
            $('.nav-list').slideDown('slow');
            $('#navIc').removeClass('fa fa-bars')
                .addClass('fas fa-times');
        } else {
            $('.nav-list').slideUp('slow');
            $('#navIc').removeClass('fas fa-times')
                .addClass('fa fa-bars');
        }
    });


    $.getJSON(githubLink, (res) => {
        let data = res.participants;

        $('#totalPart').html(`TOTAL CONTRIBUTORS ${data.length}`);


        function windowSizeChecker() {

            let slicedContent  = [];

            if (window.innerWidth >= 768) {
                $(window).on('resize', () => {
                    location.reload();
                })
                return slicedContent = data.slice(0, 8);
            } else if (window.innerWidth === 571) {
                $(window).on('resize', () => {
                    location.reload();
                })
                return slicedContent = data.slice(0, 6);
            }
            else if (window.innerWidth >= 360) {
                $(window).on('resize', () => {
                    location.reload();
                })
                return slicedContent = data.slice(0, 4);
            }
            return slicedContent;
        }

        windowSizeChecker().map((e, i) => {
            // get github user profile image / icon
            let participantAvatar = `${e["GitHub Profile"]}.png`

            $('#participantContainer')
                .append(`
                    <div class="cardData" id="cardData${i}" name="${e.Name}">
                        <div class="data-box" id="card${i}" style='background-image: url(${participantAvatar})'></div>
                        <span class="contributorName" id="cbName${i}" >${e.Name}</span>
                    </div>
                    `)

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


        // contributor story members
        function groupOfThree([a, b, c, ...rest]) {
            if (rest.length === 0) {
                return [[a, b, c].filter(x => x !== undefined)];
            }
            return [[a, b, c]].concat(groupOfThree(rest));
        }

        let groups = groupOfThree(data);

        groups.map((m, i) => {
            $('#storyBoard').append(`
            <div class="board board${i}" id="board${i}">
            <h3 class="contributor">Contributors</h3>
            <div class="members">
            ${m.map((e, i) => {
                return `<div class="member-cont">
                    ${[m].map((e) => {
                    let commits = `https://github.com/OSCA-Ado-Ekiti/Hacktoberfest2021-Ekiti/commits?author=${e[i].Nickname}`
                    return `<img src="${e[i]["GitHub Profile"]}.png"/>
                    <div class="member-detail">
                    <span class="member-name">${e[i].Name}</span>
                    <span class="shares">${commits.length} Commits (Shares)</span>
                    </div>`
                })}
                </div>`})}
            </div>
        </div>`)

            $(`.board${i}`).css({ "z-index": `${-i}` })
        })

        // animate stacks on click
        // function changeStack() {
        // currentId
        $('#board0').addClass('stack-top');

        // detect click effect
        $('.board').click((e) => {

            let num = [$('.board').attr('id')].indexOf(e.target.id);
            swap(0, num)
        });
        // }

        // changeStack()

        // function swap(idx1, idx2) {

        //     let container = document.getElementById('storyBoard');

        //     // ditch text nodes and the like
        //     let children = Array.prototype.filter.call(
        //         container.childNodes,
        //         function (node) {
        //             return node.nodeType === 1;
        //         }
        //     );
        //     // get references to the relevant children
        //     let el1 = children[idx1];
        //     let el2 = children[idx2];
        //     let el2next = children[idx2 + 1];

        //     // put the second element before the first
        //     container.insertBefore(el2, el1);
        //     // now put the first element where the second used to be
        //     if (el2next) container.insertBefore(el1, el2next);
        //     else container.appendChild(el1);
        // }
    })
});
