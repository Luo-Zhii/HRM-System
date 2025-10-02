import SettingsForm from "./component/SettingForm";

export default function SettingsPage() {
  return (
    <section className="p-6 max-w-2xl">
      <h1 className="text-gray-800 text-2xl font-bold mb-6">System Settings</h1>
      <SettingsForm />
    </section>
  );
}
