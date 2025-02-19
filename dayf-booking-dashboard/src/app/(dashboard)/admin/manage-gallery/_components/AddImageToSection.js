import FormWrapper from "@/components/Form/FormWrapper";
import USelect from "@/components/Form/USelect";
import UUpload from "@/components/Form/UUpload";
import { Button, Modal } from "antd";

// dummy data
const sections = [
  { label: "Top", value: "top" },
  { label: "Why Choose Us", value: "whyChooseUs" },
];

export default function AddImageToSection({ open, setOpen, section }) {
  return (
    <Modal
      centered
      open={open}
      setOpen={setOpen}
      footer={null}
      onCancel={() => {
        setOpen(false);
      }}
      title={`Add Image to ${section} Section`}
    >
      <FormWrapper onSubmit={() => {}}>
        <USelect
          name="section"
          label="Section"
          placeholder="Select section"
          options={sections}
          defaultValue={section}
          disabled={true}
        />
        <UUpload name="image" label="Upload Image" maxCount={1} />
        <Button
          type="primary"
          htmlType="submit"
          className="w-full"
          size="large"
        >
          Submit
        </Button>
      </FormWrapper>
    </Modal>
  );
}
