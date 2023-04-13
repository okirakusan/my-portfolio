// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useRef } from "react";
import { Form, Button, Alert } from "react-bootstrap";

export const Footer = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const [showAlert, setShowAlert] = useState(false);
  const [alertVariant, setAlertVariant] = useState<"success" | "danger">(
    "success"
  );
  const [alertMessage, setAlertMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("送信中・・・");
    console.log(nameRef.current?.value);

    let data = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      message: messageRef.current?.value,
    };

    await fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(async (res) => {
      if (res.status === 200) {
        console.log("送信に成功しました");
        setAlertVariant("success");
        setAlertMessage("メールを送信しました");
      } else {
        setAlertVariant("danger");
        setAlertMessage("メールの送信に失敗しました");
      }
      setShowAlert(true);

      // clear form fields after submit
      nameRef.current!.value = "";
      emailRef.current!.value = "";
      messageRef.current!.value = "";
    });
  };

  return (
    <>
      <div className="container mt-5 ">
        <h2 className="mb-3">Next.jsでメール送信</h2>
        <Form
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
        >
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              お名前
            </label>
            <input
              className="form-control"
              type="text"
              id="name"
              required
              ref={nameRef}
              name="name"
              autoComplete="name"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              メールアドレス
            </label>
            <input
              className="form-control"
              type="email"
              id="email"
              required
              ref={emailRef}
              name="email"
              autoComplete="email"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="message">
              メッセージ
            </label>
            <textarea
              className="form-control"
              id="message"
              required
              ref={messageRef}
              name="message"
              autoComplete="off"
            />
          </div>
          <Button className="btn btn-danger" type="submit">
            メール送信
          </Button>
        </Form>
        {showAlert && (
          <Alert
            variant={alertVariant}
            className="mt-3"
            onClose={() => setShowAlert(false)}
            dismissible
          >
            {alertMessage}
          </Alert>
        )}
      </div>
    </>
  );
};
