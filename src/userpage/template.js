var yo =require('yo-yo');
var layout = require('../layout');
var translate = require('../translate');

export default function userPageTemplate(username){

var el = yo `
	<div class="container user-page">
		<div class="row">
			<div class="col s12 m10 offset-m1 l8 offset-12 center-align heading">
				<div class="row">
					<div class="col s12 m10 offset-m1 l3 offset-l3 center">
						<img src="https://pbs.twimg.com/profile_images/442983338/DSC00544_400x400.JPG" class="responsive-img circle" />
					</div>
					<div class="col s12 m10 offset-m1 l6 left-align">
						<h2 class="hide-on-large-only center-align">${username} </h2>
						<h2 class="hide-on-med-and-down left-align">${username} </h2>
					</div>			
				</div>
			</div>
		</div>
	</div>
 `
 return layout(el);
}
