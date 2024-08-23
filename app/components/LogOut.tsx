"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Alert from "./Alert";
const LogOut = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false); // Onay modalı için state ekledik
  const router = useRouter();

  const handleLogout = async () => {
    setShowConfirm(true); // Onay modalını göster
  };

  const confirmLogout = async () => {
    const response = await fetch("/api/logout", { method: "POST" });

    if (response.ok) {
      router.push("/");
    } else {
      console.error("Çıkış yapılamadı");
    }

    setShowConfirm(false); // Onay modalını kapat
  };

  const cancelLogout = () => {
    setShowConfirm(false); // Onay modalını kapat
  };

  return (
    <aside className="absolute right-0 top-0">
      <button
        className="p-4 relative"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onClick={handleLogout} // Artık handleLogout fonksiyonunu çağırıyoruz
        aria-describedby="logout-tooltip"
      >
        <Image src="/logout.png" width={32} height={32} alt="logout" />
        {showTooltip && (
          <span
            id="logout-tooltip"
            role="tooltip"
            className="absolute z-10 right-4 top-12 bg-gray-800 text-white text-sm rounded p-1"
          >
            Çıkış
          </span>
        )}
      </button>

      {showConfirm && (
        <Alert
          message="Hesabınızdan çıkış yapılacak. Devam etmek istiyor musunuz?"
          confirmMessage="Çıkış Yap"
          onConfirm={confirmLogout}
          onClose={cancelLogout}
        />
      )}
    </aside>
  );
};

export default LogOut;
