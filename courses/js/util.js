/**
 * Initialize the statistics panel
 * 
 * @param {Number} type 0: fps, 1: ms, 2: mb, 3+: custom
 * @return stats object 
 */
function initStats(type) {
    const panelType = (type !== 'undefined' && type) && (!isNaN(type)) ? parseInt(type) : 0;
    const stats = new Stats();

    stats.showPanel(panelType);
    document.body.appendChild(stats.dom);

    return stats;
}

/**
 * Initialize trackball controls to control scene
 * 
 * @param {THREE.Camera} camera
 * @param {THREE.Renderer} renderer
 * 
 * @return trackball controls
 */
function initTrackballControls(camera, renderer) {
    const trackballControls = new THREE.TrackballControls(camera, renderer.domElement);

    trackballControls.rotateSpeed = 1.0;
    trackballControls.zoomSpeed = 1.2;
    trackballControls.panSpeed = 0.8;
    trackballControls.noZoom = false;
    trackballControls.noPan = false;
    trackballControls.staticMoving = true;
    trackballControls.dynamicDampingFactor = 0.3;
    trackballControls.keys = [65, 83, 68];

    return trackballControls;
}