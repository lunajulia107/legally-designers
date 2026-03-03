import React, { useEffect, useRef, useState } from "react";

interface FormErrors {
  phoneNumber: string;
  serviceType: string;
  userName: string;
}

const WhatsappPopup: React.FC = () => { 
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState<FormErrors>({
    phoneNumber: "",
    serviceType: "",
    userName: "",
  });
  const [phoneNumber, setPhoneNumber] = useState("");
  const [popupVisible, setPopupVisible] = useState(false);
  const [serviceType, setServiceType] = useState("");
  const [userName, setUserName] = useState("");

  const popupRef = useRef<HTMLDivElement>(null);
  const whatsappNumber = "+5511999999999";

  // Alterna a visibilidade do popup
  const togglePopup = () => setPopupVisible((prev) => !prev);

  // Formata o número de telefone (Brasil)
  const formatPhoneNumber = (value: string): string => {
    const cleaned = value.replace(/\D/g, "");
    if (cleaned.length <= 10) {
      const limited = cleaned.slice(0, 10);
      return limited.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3").trimEnd("-");
    } else {
      const limited = cleaned.slice(0, 11);
      return limited.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3").trimEnd("-");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validação organizada
    const newErrors: FormErrors = {
      phoneNumber: phoneNumber.trim() ? "" : "Digite seu número de celular.",
      serviceType: serviceType ? "" : "Selecione o tipo de serviço.",
      userName: userName.trim() ? "" : "Digite seu nome.",
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some((msg) => msg !== "")) return;

    const dados = {
      celular: phoneNumber,
      descricao: description,
      nome: userName,
      servico: serviceType,
    };

    try {
      await fetch("http://localhost/projectLegallyDesigners/backend/api/contato.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
      });
    } catch (error) {
      console.error("Erro ao salvar no banco:", error);
    }

    const message = encodeURIComponent(
      `Olá, me chamo ${userName}\nCelular: ${phoneNumber}\nServiço desejado: ${serviceType}\nDescrição: ${description || "Sem descrição"}`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");

    // Reset de estados
    setDescription("");
    setErrors({ phoneNumber: "", serviceType: "", userName: "" });
    setPhoneNumber("");
    setServiceType("");
    setUserName("");
    setPopupVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setPopupVisible(false);
      }
    };

    if (popupVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [popupVisible]);

  return (
    <>
      <button
        className="bottom-0 btn btn-green end-0 m-4 rounded-circle position-fixed text-white"
        id="btn-whatsapp"
        onClick={togglePopup}
        title="Fale conosco"
        type="button"
      >
        <i className="bi bi-whatsapp fs-3"></i>
      </button>

      {popupVisible && (
        <div ref={popupRef} id="whatsapp-popup" className="box-transparent p-4 rounded-4">
          <form onSubmit={handleSubmit}>
            <h5 className="fw-bolder mb-3">Fale com a gente</h5>

            <div className="mb-2">
              <label className="mb-1" htmlFor="user-name">Nome</label>
              <input
                className="form-control"
                id="user-name"
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Nome"
                type="text"
                value={userName}
              />
              {errors.userName && <p className="text-danger mt-1">{errors.userName}</p>}
            </div>

            <div className="mb-2">
              <label className="mb-1" htmlFor="phone-number">Celular</label>
              <input
                className="form-control"
                id="phone-number"
                onChange={(e) => setPhoneNumber(formatPhoneNumber(e.target.value))}
                placeholder="(11) 99999-9999"
                type="tel"
                value={phoneNumber}
              />
              {errors.phoneNumber && <p className="text-danger mt-1">{errors.phoneNumber}</p>}
            </div>

            <div className="mb-2">
              <label className="mb-1" htmlFor="service-type">Tipo de serviço</label>
              <select
                className="form-select"
                id="service-type"
                onChange={(e) => setServiceType(e.target.value)}
                value={serviceType}
              >
                <option value="">Selecione uma opção</option>
                <option value="Todos">Todos</option>
                <option value="Design de Marca">Design de Marca</option>
                <option value="Gestão de Redes Sociais">Gestão de Redes Sociais</option>
                <option value="Sites Estratégicos">Sites Estratégicos</option>
                <option value="Outros">Outros</option>
              </select>
              {errors.serviceType && <p className="text-danger mt-1">{errors.serviceType}</p>}
            </div>

            <div className="mb-3">
              <label className="mb-1" htmlFor="description">Descrição (opcional)</label>
              <textarea
                className="form-control"
                id="description"
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Descreva brevemente o que você precisa"
                rows={2}
                value={description}
              />
            </div>

            <button className="btn btn-green rounded-5 text-white w-100" type="submit">
              Iniciar conversa
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default WhatsappPopup;