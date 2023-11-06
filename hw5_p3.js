document.getElementById('stateForm').addEventListener('submit', function (event) {
  event.preventDefault();
  let textEnter = document.getElementById('enterName').value.trim().toLowerCase();

  const inFo = [
    ['AL', 'Alabama', 'Montgomery', '4,903,185'],
    ['AK', 'Alaska', 'Juneau', '731,545'],
    ['AZ', 'Arizona', 'Phoenix', '7,278,717'],
    ['AR', 'Arkansas', 'Little Rock', '3,017,825'],
    ['CA', 'California', 'Sacramento', '399,512,223'],
    ['CO', 'Colorado', 'Denver', '5,758,736']
    // Add more states following the same pattern
  ];

  let doc = false;
  let staInfo = [];

  for (let i = 0; i < inFo.length; i++) {
    let stateAbbr = inFo[i][0].toLowerCase();
    let stateName = inFo[i][1].toLowerCase();

    if (textEnter === stateAbbr || textEnter === stateName) {
      staInfo = inFo[i];
      doc = true;
      break;
    }
  }

  let output = document.getElementById('output');

  if (doc) {
    output.innerHTML = `Thanks for your inquiry, here is the information you requested:<br>
    State abbr = ${staInfo[0]}<br>
    State Name = ${staInfo[1]}<br>
    Capital = ${staInfo[2]}<br>
    Population = ${staInfo[3]}`;
  } else {
    output.textContent = "Sorry, we do not have information about this state! We only have information about.....";
  }
});

document.getElementById('clearBtn').addEventListener('click', function () {
  document.getElementById('output').innerHTML = '';
  document.getElementById('enterName').value = '';
});
