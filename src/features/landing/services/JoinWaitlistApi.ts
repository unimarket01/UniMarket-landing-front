import apiClient from "../../../config/api";
import type { WaitlistUser } from "../types/user";


type ApiResponse = {
  success: boolean;
  message?: string;
};

export const JoinWaitlistApi = async (
  userData: WaitlistUser
): Promise<ApiResponse> => {
  try {
    const params = new URLSearchParams();
    params.append("name", userData.name);
    params.append("email", userData.email);

    const response = await apiClient.post("/api/users/register", params, {
      timeout: 30000,
    });

    if (response.data === "Success") {
      return { success: true };
    } else {
      return { 
        success: false, 
        message: "Respuesta inesperada del servidor." 
      };
    }
  } catch (error: any) {
    let errorMessage = "Error inesperado. Por favor, intenta de nuevo.";

    if (error.response) {
      if (error.response.status === 400 && error.response.data) {
        errorMessage = error.response.data; 
      }
      else if (error.response.status === 500) {
        errorMessage = "Error interno del servidor. Intenta más tarde.";
      }
    } else if (error.code === 'ECONNABORTED') {
      errorMessage = "La solicitud está tardando demasiado. Por favor, intenta de nuevo más tarde.";
    } else if (!error.response) {
      errorMessage = "No se pudo conectar con el servidor. Revisa tu conexión.";
    }

    throw new Error(errorMessage);
  }
};