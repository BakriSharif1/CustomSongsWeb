import { cn } from "@/lib/utils";

interface StepperProps {
  steps: string[];
  currentStep: number;
}

export default function Stepper({ steps, currentStep }: StepperProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {steps.map((step, index) => {
        const isActive = index === currentStep;
        const isComplete = index < currentStep;
        return (
          <div
            key={step}
            className={cn(
              "flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em]",
              isActive && "border-ember/60 bg-ember/10 text-ember",
              isComplete && "border-rosewood/40 bg-white text-rosewood",
              !isActive && !isComplete && "border-rosewood/10 text-rosewood/50"
            )}
          >
            <span className="text-[10px]">{index + 1}</span>
            <span>{step}</span>
          </div>
        );
      })}
    </div>
  );
}
