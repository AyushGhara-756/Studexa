'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Upload, X, AlertCircle, CheckCircle } from 'lucide-react';
import Navbar from '@/components/custom/Navbar';
import { graphqlRequest, addAssignment, getStudentInfo } from '@/lib/graphql/client';

export default function UploadAssignment() {
  const [assignmentName, setAssignmentName] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [studentId, setStudentId] = useState<string>('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      // Validate file size (max 20MB)
      if (selectedFile.size > 20 * 1024 * 1024) {
        setError('File size must be less than 20MB');
        return;
      }
      setFile(selectedFile);
      setError('');
    }
  };

  const generateFilename = (originalName: string) => {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(7);
    const extension = originalName.split('.').pop();
    return `assignment_${timestamp}_${random}.${extension}`;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Step 1: Fetch student info using GraphQL
      const result = await getStudentInfo(1);
      const fetchedStudentId = result?.student?.id;

      if (!fetchedStudentId) {
        throw new Error('Could not fetch student information');
      }

      setStudentId(fetchedStudentId);

      // Step 2: Add assignment metadata via GraphQL
      const mutationResult = await addAssignment(
        assignmentName,
        description,
        fetchedStudentId
      );

      if (!mutationResult?.addAssignment) {
        throw new Error('Failed to create assignment record');
      }

      // Step 3: Upload file via HTTP with FormData
      if (file) {
        const formData = new FormData();
        // const filename = generateFilename(file.name);
        formData.append('file', file);
        formData.append('studentId', fetchedStudentId);
        // formData.append('assignmentName', assignmentName);

        const uploadResponse = await fetch(
          `http://localhost:3001/file/upload`,
          {
            method: 'POST',
            body: formData,
          }
        );

        if (!uploadResponse.ok) {
          throw new Error('File upload failed');
        }
      }

      // Success!
      setSuccess(true);
      setAssignmentName('');
      setDescription('');
      setFile(null);

      // Reset success message after 3 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } catch (err: any) {
      setError(err.message || 'Failed to upload assignment');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex">
      <Navbar />
      <main className="flex-1 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 overflow-auto pb-8">
        <div className="p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto w-full">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-50">📤 Upload Assignment</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1 sm:mt-2 text-sm sm:text-base">Submit your completed work</p>
        </div>

        {/* Success Message */}
        {success && (
          <div className="mb-6 p-4 bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700 rounded-lg flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-green-900 dark:text-green-100">Assignment uploaded successfully!</p>
              <p className="text-sm text-green-700 dark:text-green-300 mt-1">Your assignment has been submitted and sent to your instructor.</p>
            </div>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 dark:bg-red-900 border border-red-200 dark:border-red-700 rounded-lg flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-red-900 dark:text-red-100">Error uploading assignment</p>
              <p className="text-sm text-red-700 dark:text-red-300 mt-1">{error}</p>
            </div>
          </div>
        )}

        {/* Form Card */}
        <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700 p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
          {/* Assignment Name */}
          <div className="mb-4 sm:mb-6">
            <label htmlFor="name" className="block text-slate-900 dark:text-slate-50 font-semibold mb-2 text-sm sm:text-base">
              Assignment Name *
            </label>
            <input
              id="name"
              type="text"
              value={assignmentName}
              onChange={(e) => setAssignmentName(e.target.value)}
              placeholder="e.g., Mathematics Problem Set Chapter 4"
              required
              disabled={loading}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-slate-500 dark:placeholder-slate-400 text-sm"
            />
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Give your assignment a descriptive name</p>
          </div>

          {/* Description */}
          <div className="mb-6 sm:mb-8">
            <label htmlFor="description" className="block text-slate-900 dark:text-slate-50 font-semibold mb-2 text-sm sm:text-base">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Add any additional notes about this assignment..."
              rows={4}
              disabled={loading}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-slate-500 dark:placeholder-slate-400 text-sm"
            />
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Optional: Add notes or context</p>
          </div>

          {/* File Upload */}
          <div className="mb-6 sm:mb-8">
            <label className="block text-slate-900 dark:text-slate-50 font-semibold mb-2 text-sm sm:text-base">
              Upload File *
            </label>

            {file ? (
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 sm:p-4 bg-blue-50 dark:bg-blue-900 border border-blue-200 dark:border-blue-700 rounded-lg gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center text-white flex-shrink-0">
                    📄
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-slate-900 dark:text-slate-50 truncate text-sm">{file.name}</p>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                      {(file.size / 1024).toFixed(2)} KB
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setFile(null)}
                  disabled={loading}
                  className="p-2 hover:bg-blue-100 dark:hover:bg-blue-800 rounded-lg transition-colors flex-shrink-0"
                >
                  <X className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                </button>
              </div>
            ) : (
              <label className="block border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg p-6 sm:p-8 cursor-pointer hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                <input
                  type="file"
                  onChange={handleFileChange}
                  disabled={loading}
                  className="hidden"
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.xls,.xlsx"
                />
                <div className="text-center">
                  <Upload className="w-10 sm:w-12 h-10 sm:h-12 text-slate-400 dark:text-slate-500 mx-auto mb-2 sm:mb-3" />
                  <p className="text-slate-900 dark:text-slate-50 font-semibold text-sm sm:text-base">Click to upload or drag and drop</p>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 sm:mt-2">PDF, DOC, DOCX, JPG, PNG, XLS (Max 10MB)</p>
                </div>
              </label>
            )}
          </div>

          {/* Checklist */}
          {/* <div className="mb-6 sm:mb-8 bg-slate-50 dark:bg-slate-700 rounded-lg p-4 sm:p-6 border border-slate-200 dark:border-slate-600">
            <p className="font-semibold text-slate-900 dark:text-slate-50 mb-4 text-sm sm:text-base">Before submitting:</p>
            <ul className="space-y-3">
              {[
                'Assignment name is descriptive',
                'File is in correct format',
                'File size is under 10MB',
                'Content is complete and correct',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <input type="checkbox" id={`check-${idx}`} className="w-5 h-5 border-slate-300 dark:border-slate-600 rounded focus:ring-2 focus:ring-blue-500 dark:bg-slate-600 mt-0.5 flex-shrink-0" />
                  <label htmlFor={`check-${idx}`} className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm select-none">
                    {item}
                  </label>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button
              type="submit"
              disabled={loading || !assignmentName || !file}
              className="flex-1 gap-2 bg-blue-600 hover:bg-blue-700 text-white"
            >
              {loading ? (
                <>
                  <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Uploading...
                </>
              ) : (
                <>
                  <Upload className="w-4 h-4" />
                  Submit Assignment
                </>
              )}
            </Button>
            <Button
              type="button"
              variant="outline"
              disabled={loading}
              onClick={() => {
                setAssignmentName('');
                setDescription('');
                setFile(null);
                setError('');
              }}
              className="sm:w-auto"
            >
              Clear
            </Button>
          </div>

          {/* Status Info */}
          {studentId && (
            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-blue-50 dark:bg-blue-900 rounded-lg border border-blue-200 dark:border-blue-700 text-xs text-slate-600 dark:text-slate-300">
              <p>Student ID: <span className="font-semibold">{studentId}</span></p>
            </div>
          )}
        </form>

        {/* Info Box */}
        <div className="bg-blue-50 dark:bg-blue-900 rounded-lg p-4 sm:p-6 border border-blue-200 dark:border-blue-700">
          <h3 className="font-semibold text-slate-900 dark:text-slate-50 mb-3 text-sm sm:text-base">📋 Assignment Guidelines</h3>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <li>• Ensure your assignment is complete before submitting</li>
            <li>• Use clear file names (e.g., YourName_Assignment1.pdf)</li>
            <li>• Supported formats: PDF, DOC, DOCX, JPG, PNG, XLS</li>
            <li>• Maximum file size: 10MB</li>
            <li>• Once submitted, you cannot make changes</li>
          </ul>
        </div>
      </div>
      </main>
    </div>
  );
}
