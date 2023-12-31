import { create } from "zustand";

import type {
	StepOneData,
	StepThreeData,
	StepTwoData,
} from "../components/order/type";

type setDataType =
	| { step: 1; data: StepOneData }
	| { step: 2; data: StepTwoData }
	| { step: 3; data: StepThreeData };

type FormStore = {
	stepOne: StepOneData | null;
	stepTwo: StepTwoData | null;
	stepThree: StepThreeData | null;
	setData: ({ step, data }: setDataType) => void;
};

const useFormStore = create<FormStore>((set) => ({
	stepOne: null,
	stepTwo: null,
	stepThree: null,
	setData: ({ step, data }) => {
		set((state) => {
			if (step === 1) {
				return {
					stepOne: { ...state.stepOne, ...data },
					stepTwo: state.stepTwo,
					stepThree: state.stepThree,
				};
			} else if (step === 2) {
				return {
					stepOne: state.stepOne,
					stepTwo: { ...state.stepTwo, ...data },
					stepThree: state.stepThree,
				};
			} else if (step === 3) {
				return {
					stepOne: state.stepOne,
					stepTwo: state.stepTwo,
					stepThree: { ...state.stepThree, ...data },
				};
			}
			return state;
		});
	},
}));

export default useFormStore;
