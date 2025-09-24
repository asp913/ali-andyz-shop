export default function TestLayoutPage() {
  return (
    <div className="min-h-screen bg-red-100 p-8">
      <h1 className="text-4xl font-bold text-red-800 mb-8">
        Layout Test Page
      </h1>
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <p className="text-lg mb-4">
          This page tests if the layout is working correctly.
        </p>
        <p className="text-sm text-gray-600">
          If you can see this page, the layout should be working.
          The header should be visible above this content.
        </p>
      </div>
    </div>
  );
}
