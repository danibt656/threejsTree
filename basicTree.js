var scene,
    camera,
    controls,
    renderer,
    geometry,
    spheregeo,
    group;

init();
render();

function init() {

  renderer =  new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );

  document.body.appendChild( renderer.domElement );


  scene = new THREE.Scene();
  scene.background = new THREE.Color( 0x000000 );

  camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.1, 1000 );
  camera.position.z = 5;
  
  //controls = new OrbitControls( camera, renderer.domElement );
  //controls.update();

  //controls.mouseButtons = {
//	LEFT: THREE.MOUSE.ROTATE,
//	MIDDLE: THREE.MOUSE.DOLLY,
//	RIGHT: THREE.MOUSE.PAN
  //}

  geometry = new THREE.BoxGeometry( 1, 1, 1 );
  spheregeo = new THREE.SphereGeometry( 1, 32, 32 );

  var leaveDarkMaterial = new THREE.MeshLambertMaterial( { color: 0x91E56E } );
  var leaveLightMaterial = new THREE.MeshLambertMaterial( { color: 0xA2FF7A } );
  var leaveDarkDarkMaterial = new THREE.MeshLambertMaterial( { color: 0x71B356 } );
  var stemMaterial = new THREE.MeshLambertMaterial( { color: 0x7D5A4F } );

  var light = new THREE.DirectionalLight( 0xEEFFD3, 1 );
  light.position.set( 0, 0, 1 );
  scene.add( light );

  var light = new THREE.DirectionalLight( 0xFF0000, 0.4 );
  light.position.set( 1, 0, 0 );
  scene.add( light );

  var light = new THREE.DirectionalLight( 0xFFFFFF, 0.2 );
  light.position.set( 0, 1, 0 );
  scene.add( light );

  var stem = new THREE.Mesh( geometry, stemMaterial );
  stem.position.set( 0, 0, 0 );
  stem.scale.set( 0.3, 1.5, 0.3 );

  var squareLeave01 = new THREE.Mesh( geometry, leaveDarkMaterial );
  squareLeave01.position.set( 0.5, 1.6, 0.5 );
  squareLeave01.scale.set( 0.8, 0.8, 0.8 );

  var squareLeave02 = new THREE.Mesh( geometry, leaveDarkMaterial );
  squareLeave02.position.set( -0.4, 1.3, -0.4 );
  squareLeave02.scale.set( 0.7, 0.7, 0.7 );

  var squareLeave03 = new THREE.Mesh( geometry, leaveDarkMaterial );
  squareLeave03.position.set( 0.4, 1.7, -0.5 );
  squareLeave03.scale.set( 0.7, 0.7, 0.7 );

  var leaveDark = new THREE.Mesh( geometry, leaveDarkMaterial );
  leaveDark.position.set( 0, 1.2, 0 );
  leaveDark.scale.set( 1, 2, 1 );

  var leaveLight = new THREE.Mesh( geometry, leaveLightMaterial );
  leaveLight.position.set( 0, 1.2, 0 );
  leaveLight.scale.set( 1.1, 0.5, 1.1 );

  var ground = new THREE.Mesh( spheregeo, leaveDarkDarkMaterial );
  ground.position.set( 0, -2, 0 );
  ground.scale.set( 2.4, 0.8, 2.4 );

  tree = new THREE.Group();
  tree.add( leaveDark );
  tree.add( leaveLight );
  tree.add( squareLeave01 );
  tree.add( squareLeave02 );
  tree.add( squareLeave03 );
  tree.add( ground );
  tree.add( stem );

  tree.rotation.y = 1;
  tree.rotation.x = 0.5;


  scene.add( tree );

}

function render() {

  requestAnimationFrame( render );

//  controls.update();

  tree.rotation.y += 0.007;
  tree.rotation.x += 0.0006;

  renderer.render( scene, camera );

}
