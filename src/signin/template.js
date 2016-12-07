var yo =require('yo-yo');
var landing = require('../landing');
var translate = require('../translate');


var siginForm = yo `<div class="col s12 m7">
							<div class="row">
								<div class="signup-box">
									<h1 class="platzigram"> Platzigram </h1>
									<form class="signup-form"> 
										<h2> ${translate.message('signup.subheading')} </h2>
										<div class="section">
											<a class="btn btn-fb hide-on-med-and-down "> 	${translate.message('signup.facebook')} 
											</a>
											<a class="btn btn-fb hide-on-large-only "> <i class="fa fa-facebook-official" aria-hidden="true"></i>
												${translate.message('signup.text')}
											</a>
										</div>
										<div class="divider"></div>
										<div class="section">
											<input type="text" name="username" placeholder="${translate.message('username')}">
											<input type="password" name="password" placeholder="${translate.message('password')}">
											<button class="btn waves-effect waves-light btn-signup" type="submit">${translate.message('signup.text')}</button>
										</div>
									</form>
								</div>	
							</div>
							<div class="login-box">
								${translate.message('signin.not-have-account')}
								<a href="/signup">${translate.message('signup.call-to-action')}</a>								
							</div>
						</div> `


module.exports = landing(siginForm)