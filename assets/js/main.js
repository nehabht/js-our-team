const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
];


let cards = document.querySelector(".cards")

for (let i = 0; i < team.length; i++) {
    const teamMember = team[i];
    console.log(team.length)
    
    let card= "<div class='card'> <div>"+ teamMember.image +"</div> <h2> "+ teamMember.name +"</h2> <h4>"+ teamMember.role+ "</h4></div>"
    cards.innerHTML += card
    

    console.log(teamMember.name);
    console.log(teamMember.role);
    console.log(teamMember.image)
}


//stampare name,role e image stringa in dom

