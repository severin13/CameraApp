let camera, scene, renderer, cube;

function init() {
	// Init scene
	scene = new THREE.Scene();

	// Init camera (PerspectiveCamera)
	camera = new THREE.PerspectiveCamera(
		75,
		window.innerWidth / window.innerHeight,
		0.1,
		1000
	);

	// Init renderer
	renderer = new THREE.WebGLRenderer({alpha: true}, { antialias: true });

	renderer.setSize(window.innerWidth, window.innerHeight);

	// Render to canvas element
	document.body.appendChild(renderer.domElement);

	// Init BoxGeometry object (rectangular cuboid)
	const geometry = new THREE.BoxGeometry(2, 2, 2);
	// Add texture
	const texture = new THREE.TextureLoader().load('textures/cardboard_severin.jpg');
	// Create material with texture
	const material = new THREE.MeshBasicMaterial({ map: texture });
	// Create material with color
	//const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });

	// Create mesh with geo and material
	cube = new THREE.Mesh(geometry, material);
	scene.add(cube);

	camera.position.z = 5;
}

// Draw the scene every time the screen is refreshed
function animate() {
	requestAnimationFrame(animate);

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render(scene, camera);
}

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

init();
animate();