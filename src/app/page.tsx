import CourseHeader from '@/components/home/CourseHeader';
import CoursePlan from '@/components/home/CoursePlan';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8 lg:py-12">
        <CourseHeader />
        <CoursePlan />
      </div>
    </main>
  );
}
