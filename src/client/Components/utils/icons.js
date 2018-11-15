const reactSvg = require('devicon/icons/react/react-original.svg');
const styles = require('./styles.scss');

// font style for stylesheet
const padding = '1rem';
const iconFont = {
  fontSize: '3rem',
  color: 'black',
  margin: 0,
  padding,
}

// icon style for images
const iconStyle = {
  height: '3rem',
  width: '3rem',
  padding,
};

const icons = {
  react: (<i style={ iconFont } className="devicon-react-original colored"></i>),
  angular: (<i style={ iconFont } className="devicon-angularjs-plain colored"></i>),
  redux: (<img style={ iconStyle } src='https://s3-us-west-1.amazonaws.com/ktowebsitefiles/reduxBlack.png'/>),
  sass:  (<i style={ iconFont } className="devicon-sass-original colored"></i>),
  aws: (<i style={ iconFont } className="devicon-amazonwebservices-original colored"></i>),
  node: (<i style={ iconFont } className="devicon-nodejs-plain colored"></i>),
  backbone: (<i style={ iconFont } className="devicon-backbonejs-plain colored"></i>),
  travisci: (<i style= { iconFont } class="devicon-travis-plain"></i>),
  bootstrap: (<i style={ iconFont } class="devicon-bootstrap-plain"></i>),
  docker: (<i style={ iconFont } class="devicon-docker-plain"></i>),
  express: (<i style={ iconFont } class="devicon-express-original"></i>),
  postgresql: (<i style={ iconFont } class="devicon-postgresql-plain"></i>),
  travisci: (<i style={ iconFont } class="devicon-travis-plain"></i>),
  jest: (<img style={ iconStyle } src='https://s3-us-west-1.amazonaws.com/ktowebsitefiles/jestBlack.png'/>),
  mongoose: (<img style={ iconStyle } src='https://s3-us-west-1.amazonaws.com/ktowebsitefiles/mongooseBlack.png'/>),
  knex: (<img style={ iconStyle } src='https://s3-us-west-1.amazonaws.com/ktowebsitefiles/knexBlack.png'/>),
  redis: (<i style={ iconFont } className="devicon-redis-plain"></i>),
  nginx: (<i style={ iconFont } className="devicon-nginx-original"></i>),

  // jest: (<img style={ iconStyle } src={ require('../icons/jestBlack.png') }/>),
  // mongoose: (<img style={ iconStyle } src={ require('../icons/mongooseBlack.png') }/>),
  // knex: (<img style={ iconStyle } src={ require('../icons/knexBlack.png') }/>),
};

export default icons;