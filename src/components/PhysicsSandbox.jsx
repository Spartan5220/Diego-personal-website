import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';

const PhysicsSandbox = () => {
  const sceneRef = useRef(null);
  const engineRef = useRef(null);
  const renderRef = useRef(null);
  const runnerRef = useRef(null);

  useEffect(() => {
    if (!sceneRef.current) return;

    // module aliases
    const Engine = Matter.Engine,
          Render = Matter.Render,
          Runner = Matter.Runner,
          Bodies = Matter.Bodies,
          Composite = Matter.Composite,
          Mouse = Matter.Mouse,
          MouseConstraint = Matter.MouseConstraint;

    // create an engine
    const engine = Engine.create();
    engineRef.current = engine;

    // create a renderer
    const width = sceneRef.current.clientWidth;
    const height = sceneRef.current.clientHeight;

    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width,
        height,
        background: 'transparent',
        wireframes: false,
        pixelRatio: window.devicePixelRatio
      }
    });
    renderRef.current = render;

    // Data URIs for SVGs
    // Kettlebell SVG (simplified)
    const kettlebellSVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="%233b82f6"><path d="M16 6a4 4 0 0 0-8 0v2H6v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8h-2V6zm-6 0a2 2 0 0 1 4 0v2h-4V6z"/></svg>`;
    
    // Gym Plate SVG (simplified)
    const plateSVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="%2394a3b8"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="2" fill="%230f172a"/></svg>`;
    
    // Coffee Cup SVG
    const coffeeSVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="%23ec4899"><path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2a2 2 0 0 0 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z"/></svg>`;

    // create bodies
    const ground = Bodies.rectangle(width / 2, height + 25, width, 50, { isStatic: true, render: { visible: false } });
    const ceiling = Bodies.rectangle(width / 2, -25, width, 50, { isStatic: true, render: { visible: false } });
    const leftWall = Bodies.rectangle(-25, height / 2, 50, height, { isStatic: true, render: { visible: false } });
    const rightWall = Bodies.rectangle(width + 25, height / 2, 50, height, { isStatic: true, render: { visible: false } });
    
    const items = [
      Bodies.circle(width * 0.2, 50, 30, { 
        restitution: 0.5, 
        render: { sprite: { texture: kettlebellSVG, xScale: 1, yScale: 1 } }
      }),
      Bodies.circle(width * 0.5, 100, 40, { 
        restitution: 0.2, 
        density: 0.05,
        render: { sprite: { texture: plateSVG, xScale: 1, yScale: 1 } }
      }),
      Bodies.circle(width * 0.8, 150, 25, { 
        restitution: 0.8, 
        render: { sprite: { texture: coffeeSVG, xScale: 1, yScale: 1 } }
      }),
      Bodies.circle(width * 0.3, 200, 40, { 
        restitution: 0.2, 
        density: 0.05,
        render: { sprite: { texture: plateSVG, xScale: 1, yScale: 1 } }
      })
    ];

    // add all of the bodies to the world
    Composite.add(engine.world, [ground, ceiling, leftWall, rightWall, ...items]);

    // add mouse control
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false
        }
      }
    });

    Composite.add(engine.world, mouseConstraint);

    // keep the mouse in sync with rendering
    render.mouse = mouse;

    // run the renderer
    Render.run(render);

    // create runner
    const runner = Runner.create();
    runnerRef.current = runner;
    Runner.run(runner, engine);

    // Handle resize
    const handleResize = () => {
      render.canvas.width = sceneRef.current.clientWidth;
      render.canvas.height = sceneRef.current.clientHeight;
      Matter.Body.setPosition(ground, { x: render.canvas.width / 2, y: render.canvas.height + 25 });
      Matter.Body.setPosition(ceiling, { x: render.canvas.width / 2, y: -25 });
      Matter.Body.setPosition(rightWall, { x: render.canvas.width + 25, y: render.canvas.height / 2 });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      Render.stop(render);
      Runner.stop(runner);
      if (engineRef.current) {
        Engine.clear(engineRef.current);
      }
      if (render.canvas) {
        render.canvas.remove();
      }
    };
  }, []);

  return (
    <div 
      ref={sceneRef} 
      className="absolute inset-0 z-0 pointer-events-auto"
      style={{ overflow: 'hidden' }}
    />
  );
};

export default PhysicsSandbox;
