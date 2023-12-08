import React, { useEffect } from 'react';
import { Mosaic, MosaicWindow } from 'react-mosaic-component';

import kaibuLogo from "/static/img/kaibu-icon.svg"
import 'react-mosaic-component/react-mosaic-component.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

import './app.css';

const getTitle = (id: string) => {
  return id
}

import * as imjoyCore from "imjoy-core"

export default function App() {
  let [windowNumber, setWindowNumber] = React.useState(3)
  let [imjoy, setImJoy] = React.useState(null)

  useEffect(()=>{
    const imjoy = new imjoyCore.ImJoy({
      imjoy_api: {},
      //imjoy config
    });

    imjoy.start({workspace: 'default'}).then(async ()=>{
      setImJoy(imjoy)
      imjoy.event_bus.on("add_window", win => {
        debugger
        // Create mosaic window
        // mosaicContainer.id = win.window_id; // <--- this is important
      })
      await imjoy.api.createWindow({src: "https://kaibu.org"})
    })

    
  }, [])


  const createNode = () => {
    setWindowNumber(windowNumber + 1)
    return windowNumber.toString()
  }

  return (
    <div id="app">
      <Mosaic<string>
        renderTile={(id, path) => (
          <MosaicWindow<string> path={path} createNode={createNode} title={getTitle(id)}>
            <img height={100} src={kaibuLogo} alt="Kaibu Logo" />
            <h1>{getTitle(id)}</h1>
          </MosaicWindow>
        )}

        initialValue={{
          direction: 'row',
          first: 'a',
          second: {
            direction: 'column',
            first: 'b',
            second: 'c',
          },
          splitPercentage: 40,
        }}
      />
    </div>
  )
}