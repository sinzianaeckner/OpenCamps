function getSessions(sessions) {

//var d = new Date('sessions[i].date');
//    var m = sessions[i].date;
var d = new Date('2010-01-02');
var n = d.toDateString();
//    alert(n);

  var sessions = sessions.filter(sessionsFilter);

  var outputSessions = 
    '<div id=\"sessions-inner\">'+
      '<h2 class=\"sessions\">Sessions & Schedule</h2>';
    var i;
    for(i = 0; i<sessions.length; i++) {
      outputSessions +=
				'<div class="session ' + sessions[i].sessionType + ' ' + sessions[i].camp + '">'+
					'<div class="session-inner">'+ 
						'<div class="scheduling">'+ 
  							'<div class="slot">'+ n;
									if (sessions[i].timeStart != "") {
												outputSessions += ' - ' + sessions[i].timeStart + ' to ' + sessions[i].timeStop;
									}
									outputSessions +=
								'</div>'+
  							'<div class="event">' + sessions[i].camp + ' | ' + sessions[i].sessionType + '</div>'+
						'</div>'+ 
						'<div class="presentation">'+ 
							'<div class="icon"> <img src="images/sessions/icons' + sessions[i].icon + '" class="icon"/></div>'+
							'<div class="title"><h4>' + sessions[i].sessionTitle + '</h4></div>'+
							'<div class="summary">';
								if (sessions[i].sessionSummary != "") {
									outputSessions +=
										'<div class="summary-wrapper-collapsed" id="summary' + i + '">' + sessions[i].sessionSummary + '</div>'+
										'<div class="summary-faded" id="summaryfade' + i + '"></div>';
								}
									outputSessions +=
									'</div>'+
									'<div class="links">';

								if (sessions[i].sessionSummary != "") {
									outputSessions += '<a href="javascript:;" id=\"summarylink' + i + '\" class=\"view-summary color\" onclick=\"toggleClass(summarylink' + i + ',summary' + i + ',summaryfade' + i + ')\"><i class="fa fa-angle-down"></i> View Session Summary</a>';
								}

								if (sessions[i].sessionSummary != "" && sessions[i].sessionSlides != "") {
									outputSessions += ' | ';
								}
  							if (sessions[i].sessionSlides != "") {
//	  							outputSessions += '<a href=\"' + sessions[i].sessionSlides + '\" class=\"view-slides color" target=\"_blank\"><i class="fa fa-file-text-o"></i> &nbsp;View Slides</a>';
		  					}
							outputSessions +=
  						'</div>'+
						'</div>'+
						'<div class="speakers">'+
							'<div class="speaker">'+
								'<div class="speaker-inner">'+
									'<div class="photo"><img src="http://opencamps.org/images/speakers/' + sessions[i].speakers.speaker[0].photo + '"></div>'+
									'<div class="details">'+
										'<div class="name"><h5 class="speaker-name">' + sessions[i].speakers.speaker[0].nameFirst + ' ' + sessions[i].speakers.speaker[0].nameLast + '</h5></div>'+
				    				'<div class="open-source-role">' + sessions[i].speakers.speaker[0].openSourceRole + '</div>'+
				    				'<div class="organization">' + sessions[i].speakers.speaker[0].organization + '</div>'+
						    		'<div class="role">' + sessions[i].speakers.speaker[0].role + '</div>'+
								    '<div class="links">'+
											'<div class="link linkedin"><a href="' + sessions[i].speakers.speaker[0].linkedin  + '" target="_blank" class="linkedin"><i class="fa fa-linkedin"></i></a></div>'+    
		    							'<div class="link twitter"><a href="' + sessions[i].speakers.speaker[0].twitter + '" target="_blank" class="twitter"><i class="fa fa-twitter"></i></a></div>'+    
				    				  '<div class="link github"><a href="' + sessions[i].speakers.speaker[0].github + '" target="_blank" class="twitter"><i class="fa fa-github"></i></a></div>'+    
				    				  '<div class="link website"><a href="' + sessions[i].speakers.speaker[0].website + '" target="_blank" class="website"><i class="fa fa-globe"></i></a></div>'+
								    '</div>'+
        					'</div>'+
      					'</div>'+
      				'</div>'+
					  '</div>'+
						'<div class="video">'+
  						'<h5 class="video">Video</h5>'+
  						'<div class="embed">' + sessions[i].sessionVideo + '</div>'+
						'</div>'+
					'</div>'+
        '</div>';
    }
    outputSessions += '</div>';
      
    document.getElementById("sessions").innerHTML = outputSessions;
  }
  
  
function toggleClass(el){
	if(el.className == "summary-wrapper-closed"){
		el.className = "summary-wrapper-open";
	} else {
		el.className = "summary-wrapper-closed";
	}
}

  
  
  
  
  