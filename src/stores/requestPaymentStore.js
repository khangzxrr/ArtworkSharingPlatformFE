import { getFirstPaymentByRequestId, getSecondPaymentByRequestId } from "services/requestPaymentService";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useRequestPaymentStore = create(devtools(
    (set, get) => ({
        firstPayment: {},
        secondPayment: {},
        loading: false,

        fetchFirstPaymentByRequestId: async (requestId) => {
            set({ loading: true })

            const response = await getFirstPaymentByRequestId(requestId)

            set({ firstPayment: response, loading: false })

            return response
        },
        fetchSecondPaymentByRequestId: async (requestId) => {
            set({ loading: true })

            const response = await getSecondPaymentByRequestId(requestId)

            set({ secondPayment: response, loading: false })

            return response
        },
    })
))