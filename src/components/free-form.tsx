import { Controller, useFieldArray, useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "sonner";
import { useAutoAnimate } from "@formkit/auto-animate/react"

export function FreeForm() {
  const { control, handleSubmit, register } = useForm({});
  const { fields, append, remove } = useFieldArray({
    control,
    name: "freeForm",
  });

  const [parentRef] = useAutoAnimate();

  function onSubmit() {
    toast.success("Fake Saved");
  }

  return (
    <form
      onSubmit={handleSubmit(() => {
        onSubmit();
      })}
    >
      <ul className="flex flex-col gap-2 my-4" ref={parentRef}>
        {fields.map((item, index) => (
          <li key={item.id}>
            <div className="flex gap-4">
              <Input {...register(`freeForm.${index}.key`)} />
              <Controller
                render={({ field }) => <Input {...field} />}
                name={`freeForm.${index}.value`}
                control={control}
              />
              <Button
                type="button"
                variant="default"
                size="sm"
                onClick={() => remove(index)}
              >
                Delete
              </Button>
            </div>
          </li>
        ))}
      </ul>
      <Button
        type="button"
        variant="default"
        onClick={() => append({ key: "test_key", value: "test_value" })}
      >
        Add
      </Button>
      <Button className="absolute right-10 bottom-10" variant="default" size="lg" type="submit">Save</Button>
    </form>
  );
}
