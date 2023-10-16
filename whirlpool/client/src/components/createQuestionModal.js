import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

const MyModal = ({ showModal, handleClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    question: '',
    tag1: '',
    tag2: '',
    tag3: '',
  });

  const handleFormChange = (e, field) => {
    setFormData({
      ...formData,
      [field]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData); // Replace with your logic to handle the form data
    handleClose(); // Close the modal after submission if needed
  };

  const tagOptions = [
    'HTML',
    'Javascript',
    'CSS',
    'Axios',
    'UseState',
    'Reactjs',
    'MERN',
    'LAMP',
    'SQL',
    'NoSQL',
    'Kotlin',
    'Xcode',
  ];

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create a New Question</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the title of your question"
              value={formData.title}
              onChange={(e) => handleFormChange(e, 'title')}
            />
          </Form.Group>

          <Form.Group controlId="formQuestion">
            <Form.Label style={{marginTop: "3%"}}>Question</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Type out your question"
              value={formData.question}
              onChange={(e) => handleFormChange(e, 'question')}
            />
          </Form.Group>

          {[1, 2, 3].map((tagNum) => (
            <Form.Group key={tagNum} controlId={`formTag${tagNum}`}>
              <Form.Label style={{marginTop: "3%"}}>{`Tag ${tagNum}`}</Form.Label>
              <Form.Control
                as="select"
                value={formData[`tag${tagNum}`]}
                onChange={(e) => handleFormChange(e, `tag${tagNum}`)}
              >
                <option value="">Select Tag</option>
                {tagOptions.map((tag) => (
                  <option key={tag} value={tag}>
                    {tag}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          ))}

          <Button variant="primary" type="submit" style={{marginTop: "5%"}}>
            Post Question
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default MyModal;