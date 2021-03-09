import { useCallback, useState } from "react";

import CodeFrame from "./components/CodeFrame";
import UIFrame from "./components/UIFrame";
import Modal from "./components/Modal";
import Menu from "./components/Menu";

import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedElement, setSelectedElement] = useState("");
  const [form, setForm] = useState([]);
  const [prefill, setPrefill] = useState(null);
  const [activeElement, setActiveElement] = useState(null);
  const [formCss, setFormCss] = useState({});

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedElement("");
    setPrefill(null);
  };

  const createElement = useCallback((element) => {
    setForm(() => [...form, element]);
  }, [form]);

  const editElement = useCallback((elementId) => {
    const element = form.find((elem) => elem.attributes.id === elementId);
    setSelectedElement(element.type);
    setShowModal(true);
    setPrefill(element);
  }, [form]);

  const updateElement = useCallback((newData) => {
    const updatedForm = form.map((elem) => {
      if (elem.attributes.id === newData.id) {
        return {...elem, attributes: newData};
      }

      return elem;
    });

    setForm(updatedForm);
  }, [form]);

  const removeElement = useCallback((elementId) => {
    const nextForm = form.filter(
      (elem) => elem.attributes.id !== elementId
    );
    setForm(nextForm);
  }, [form]);

  const modal = showModal ? (
    <Modal showModal={showModal} closeModal={setShowModal}>
      <div className="modal">
        <Menu
          handleClose={handleModalClose}
          selectElement={setSelectedElement}
          selectedElement={selectedElement}
          createElement={createElement}
          prefill={prefill}
          clearPrefill={setPrefill}
          updateElement={updateElement}
        />
      </div>
    </Modal>
  ) : null;

  return (
    <>
      <div className="App" id="app">
        <UIFrame
          handleOpenModal={setShowModal}
          editElement={editElement}
          removeElement={removeElement}
          form={form}
          activeElement={activeElement}
          setActiveElement={setActiveElement}
          setFormCss={setFormCss}
        />
        <CodeFrame form={form} css={formCss} />
        {modal}
      </div>
      <div id="modal"></div>
    </>
  );
}

export default App;
