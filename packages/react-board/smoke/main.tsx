import { Board, Wrapper } from '@cherrystudio/plait-react-board';
import { BasicShapes, DrawTransforms, withDraw } from '@plait/draw';
import type { PlaitBoard, PlaitElement } from '@plait/core';
import React, { useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';

import '../../react-text/src/styles/index.scss';
import '../src/styles/index.scss';
import './style.css';

function App() {
    const boardRef = useRef<PlaitBoard | null>(null);
    const [value, setValue] = useState<PlaitElement[]>([]);

    return (
        <main>
            <header>
                <button onClick={() => DrawTransforms.insertGeometry(boardRef.current!, [[80, 80], [280, 200]], BasicShapes.rectangle)}>
                    插入矩形
                </button>
                <button onClick={() => DrawTransforms.insertText(boardRef.current!, [100, 240], 'Cherry React 19 中文输入')}>
                    插入文字
                </button>
                <output data-testid="element-count">{value.length}</output>
            </header>
            <section data-testid="board">
                <Wrapper value={value} options={{}} plugins={[withDraw]} onValueChange={setValue}>
                    <Board afterInit={(board) => (boardRef.current = board)} />
                </Wrapper>
            </section>
        </main>
    );
}

createRoot(document.getElementById('root')!).render(<App />);
