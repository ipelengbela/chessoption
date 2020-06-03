$(document).ready(function(){
    
	// !!! SEE THIS PLEASE !!!
	// delete this line to make the modal box load only ONCE
	// if you let it set to 'false' it will show every time .. set it to 'true' and it will never show
	//$.cookie("modal", 'false')

	/**
	  *  MODAL BOX
	  */
	// if the requested cookie does not have the value I am looking for show the modal box
	if($.cookie("modal") != 'false')
	{
		var _message_to_show = '<div class="onLoadPOPUP"><div class="step-one"><p class="heading">Would you like us to stay in touch?</p><a href="#" class="yes-button">Yes</a><a href="#" class="close-button">No thanks</a></div><div class="step-two"><form id="subForm" action="http://sploosh.createsend.com/t/y/s/fdtdli/" method="post"><p><label for="fieldName">Name</label><input id="fieldName" name="cm-name" type="text" placeholder="Enter Full Name" /></p><p><label for="fieldEmail">Email</label><input id="fieldEmail" name="cm-fdtdli-fdtdli" type="email" placeholder="Enter Email Address" required /></p><p><label for="fieldcdtlrr">Country</label><select id="fieldcdtlrr" name="cm-fo-cdtlrr"><option value="">Select Country</option><option value="875670">Afghanistan</option><option value="875671">Albania</option><option value="875672">Algeria</option><option value="875673">American Samoa</option><option value="875674">Andorra</option><option value="875675">Angola</option><option value="875676">Anguilla</option><option value="875677">Antigua &amp; Barbuda</option><option value="875678">Argentina</option><option value="875679">Armenia</option><option value="875680">Aruba</option><option value="875681">Australia</option><option value="875682">Austria</option><option value="875683">Azerbaijan</option><option value="875684">Azores</option><option value="875685">Bahamas</option><option value="875686">Bahrain</option><option value="875687">Bangladesh</option><option value="875688">Barbados</option><option value="875689">Belarus</option><option value="875690">Belgium</option><option value="875691">Belize</option><option value="875692">Benin</option><option value="875693">Bermuda</option><option value="875694">Bhutan</option><option value="875695">Bolivia</option><option value="875696">Bonaire</option><option value="875697">Bosnia &amp;Herzegovina</option><option value="875698">Botswana</option><option value="875699">Brazil</option><option value="875700">British Indian Ocean Ter</option><option value="875701">Brunei</option><option value="875702">Bulgaria</option><option value="875703">Burkina Faso</option><option value="875704">Burundi</option><option value="875705">Cambodia</option><option value="875706">Cameroon</option><option value="875707">Canada</option><option value="875708">Canary Islands</option><option value="875709">Cape Verde</option><option value="875710">Cayman Islands</option><option value="875711">Central African Republic</option><option value="875712">Chad</option><option value="875713">Channel Islands</option><option value="875714">Chile</option><option value="875715">China</option><option value="875716">Christmas Island</option><option value="875717">Cocos Island</option><option value="875718">Colombia</option><option value="875719">Comoros</option><option value="875720">Congo</option><option value="875721">Congo Democratic Rep</option><option value="875722">Cook Islands</option><option value="875723">Costa Rica</option><option value="875724">Cote D&#x27;Ivoire</option><option value="875725">Croatia</option><option value="875726">Cuba</option><option value="875727">Curacao</option><option value="875728">Cyprus</option><option value="875729">Czech Republic</option><option value="875730">Denmark</option><option value="875731">Djibouti</option><option value="875732">Dominica</option><option value="875733">Dominican Republic</option><option value="875734">East Timor</option><option value="875735">Ecuador</option><option value="875736">Egypt</option><option value="875737">El Salvador</option><option value="875738">Equatorial Guinea</option><option value="875739">Eritrea</option><option value="875740">Estonia</option><option value="875741">Ethiopia</option><option value="875742">Falkland Islands</option><option value="875743">Faroe Islands</option><option value="875744">Fiji</option><option value="875745">Finland</option><option value="875746">France</option><option value="875747">French Guiana</option><option value="875748">French Polynesia</option><option value="875749">French Southern Ter</option><option value="875750">Gabon</option><option value="875751">Gambia</option><option value="875752">Georgia</option><option value="875753">Germany</option><option value="875754">Ghana</option><option value="875755">Gibraltar</option><option value="875756">Great Britain</option><option value="875757">Greece</option><option value="875758">Greenland</option><option value="875759">Grenada</option><option value="875760">Guadeloupe</option><option value="875761">Guam</option><option value="875762">Guatemala</option><option value="875763">Guernsey</option><option value="875764">Guinea</option><option value="875765">Guinea-Bissau</option><option value="875766">Guyana</option><option value="875767">Haiti</option><option value="875768">Honduras</option><option value="875769">Hong Kong</option><option value="875770">Hungary</option><option value="875771">Iceland</option><option value="875772">India</option><option value="875773">Indonesia</option><option value="875774">Iran</option><option value="875775">Iraq</option><option value="875776">Ireland</option><option value="875777">Isle of Man</option><option value="875778">Israel</option><option value="875779">Italy</option><option value="875780">Jamaica</option><option value="875781">Japan</option><option value="875782">Jersey</option><option value="875783">Jordan</option><option value="875784">Kazakhstan</option><option value="875785">Kenya</option><option value="875786">Kiribati</option><option value="875787">Korea North</option><option value="875788">Korea South</option><option value="875789">Kuwait</option><option value="875790">Kyrgyzstan</option><option value="875791">Laos</option><option value="875792">Latvia</option><option value="875793">Lebanon</option><option value="875794">Lesotho</option><option value="875795">Liberia</option><option value="875796">Libya</option><option value="875797">Liechtenstein</option><option value="875798">Lithuania</option><option value="875799">Luxembourg</option><option value="875800">Macau</option><option value="875801">Macedonia</option><option value="875802">Madagascar</option><option value="875803">Malawi</option><option value="875804">Malaysia</option><option value="875805">Maldives</option><option value="875806">Mali</option><option value="875807">Malta</option><option value="875808">Marshall Islands</option><option value="875809">Martinique</option><option value="875810">Mauritania</option><option value="875811">Mauritius</option><option value="875812">Mayotte</option><option value="875813">Mexico</option><option value="875814">Midway Islands</option><option value="875815">Moldova</option><option value="875816">Monaco</option><option value="875817">Mongolia</option><option value="875818">Montenegro</option><option value="875819">Montserrat</option><option value="875820">Morocco</option><option value="875821">Mozambique</option><option value="875822">Myanmar</option><option value="875823">Namibia</option><option value="875824">Nauru</option><option value="875825">Nepal</option><option value="875826">Netherland Antilles</option><option value="875827">Netherlands</option><option value="875828">Nevis</option><option value="875829">New Caledonia</option><option value="875830">New Zealand</option><option value="875831">Nicaragua</option><option value="875832">Niger</option><option value="875833">Nigeria</option><option value="875834">Niue</option><option value="875835">Norfolk Island</option><option value="875836">Norway</option><option value="875837">Oman</option><option value="875838">Pakistan</option><option value="875839">Palau Island</option><option value="875840">Palestine</option><option value="875841">Panama</option><option value="875842">Papua New Guinea</option><option value="875843">Paraguay</option><option value="875844">Peru</option><option value="875845">Philippines</option><option value="875846">Pitcairn Island</option><option value="875847">Poland</option><option value="875848">Portugal</option><option value="875849">Puerto Rico</option><option value="875850">Qatar</option><option value="875851">Reunion</option><option value="875852">Romania</option><option value="875853">Russia</option><option value="875854">Rwanda</option><option value="875855">Saipan</option><option value="875856">Samoa</option><option value="875857">Samoa American</option><option value="875858">San Marino</option><option value="875859">Sao Tome &amp;Principe</option><option value="875860">Saudi Arabia</option><option value="875861">Senegal</option><option value="875862">Serbia</option><option value="875863">Serbia &amp;Montenegro</option><option value="875864">Seychelles</option><option value="875865">Sierra Leone</option><option value="875866">Singapore</option><option value="875867">Slovakia</option><option value="875868">Slovenia</option><option value="875869">Solomon Islands</option><option value="875870">Somalia</option><option value="875871">South Africa</option><option value="875872">South Sudan</option><option value="875873">Spain</option><option value="875874">Sri Lanka</option><option value="875875">St Barthelemy</option><option value="875876">St Eustatius</option><option value="875877">St Helena</option><option value="875878">St Kitts-Nevis</option><option value="875879">St Lucia</option><option value="875880">St Maarten</option><option value="875881">St Pierre &amp;Miquelon</option><option value="875882">St Vincent &amp;Grenadines</option><option value="875883">Sudan</option><option value="875884">Suriname</option><option value="875885">Swaziland</option><option value="875886">Sweden</option><option value="875887">Switzerland</option><option value="875888">Syria</option><option value="875889">Tahiti</option><option value="875890">Taiwan</option><option value="875891">Tajikistan</option><option value="875892">Tanzania</option><option value="875893">Thailand</option><option value="875894">Togo</option><option value="875895">Tokelau</option><option value="875896">Tonga</option><option value="875897">Trinidad &amp;Tobago</option><option value="875898">Tunisia</option><option value="875899">Turkey</option><option value="875900">Turkmenistan</option><option value="875901">Turks &amp;Caicos Is</option><option value="875902">Tuvalu</option><option value="875903">Uganda</option><option value="875904">Ukraine</option><option value="875905">United Arab Emirates</option><option value="875906">United Kingdom</option><option value="875907">United States of America</option><option value="875908">Uruguay</option><option value="875909">Uzbekistan</option><option value="875910">Vanuatu</option><option value="875911">Vatican City State</option><option value="875912">Venezuela</option><option value="875913">Vietnam</option><option value="875914">Virgin Islands (Brit)</option><option value="875915">Virgin Islands (USA)</option><option value="875916">Wake Island</option><option value="875917">Wallis &amp;Futana Is</option><option value="875918">Yemen</option><option value="875919">Zambia</option><option value="875920">Zimbabwe</option></select></p><button type="submit">Send</button><a href="#" class="cancelButton">Cancel</a></form></div><div class="step-three"><p class="heading">Thank you!</p><p class="message">You\'ll be hearing from us soon.</p><a href="#" class="close-me">Close</a></div></div></div>';
		
		// on page load show the modal box
		// more info about the options you can find on the fancybox site
		$.fancybox(
			_message_to_show,
			{
				'transitionIn'      : 'fade',
				'transitionOut'     : 'fade',
				'centerOnScroll'    : 'false',
				'overlayOpacity'    : 0.7,
				'overlayColor'      : '#000',
				'modal'             : 'true'
			}
		);

		// in the message is a link with the id "modal_close"
		// when you click on that link the modal will close and the cookie is set to "true"
		// path "/" means it's active for the entire root site.. if you set it to "/admin" will be active on the "admin" folder
		// expires in 7 days
		// "modal" is the name i gave the cookie.. you can name it anything you want
		$('.onLoadPOPUP .close-button, .onLoadPOPUP .cancelButton').live('click', function(e) {
			e.preventDefault();
			$.cookie("modal", "true", { path: '/', expires: 1 });
			$.fancybox.close()
		});
		
		$('.onLoadPOPUP .yes-button').live('click', function(e) {
			$.cookie("modal", "true", { path: '/', expires: 60 });
			//$.fancybox.close()
			$('.step-one').hide();
			$('.step-two').fadeIn();
		});
		
		$('.onLoadPOPUP .close-me').live('click', function(e) {
			$.cookie("modal", "true", { path: '/', expires: 60 });
			$.fancybox.close()
		});
	}
	
	// AJAX CALLBACK
	$(function () {
		$('#subForm').submit(function (e) {
			e.preventDefault();
			$.getJSON(
			this.action + "?callback=?",
			$(this).serialize(),
			function (data) {
				if (data.Status === 400) {
				alert("Error: " + data.Message);
				} else { // 200
					//alert("Success: " + data.Message);
					$('.step-two').hide();
					$('.step-three').fadeIn();
				}
			});
		});
	});
	
	
});