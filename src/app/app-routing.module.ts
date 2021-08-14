import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'entrypoint',
    loadChildren: () => import('./all-pages/entrypoint/entrypoint.module').then( m => m.EntrypointPageModule)
  },
  {
    path: '',
    redirectTo: 'entrypoint',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./all-pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./all-pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'my-institutions',
    loadChildren: () => import('./all-pages/my-institutions/my-institutions.module').then( m => m.MyInstitutionsPageModule)
  },
  {
    path: 'my-activity',
    loadChildren: () => import('./all-pages/my-activity/my-activity.module').then( m => m.MyActivityPageModule)
  },
  {
    path: 'my-alerts',
    loadChildren: () => import('./all-pages/my-alerts/my-alerts.module').then( m => m.MyAlertsPageModule)
  },
  {
    path: 'exam-institutions',
    loadChildren: () => import('./all-pages/exam-institutions/exam-institutions.module').then( m => m.ExamInstitutionsPageModule)
  },
  {
    path: 'find-institutions-form',
    loadChildren: () => import('./all-pages/find-institutions-form/find-institutions-form.module').then( m => m.FindInstitutionsFormPageModule)
  },
  {
    path: 'mbbs-abroad',
    loadChildren: () => import('./all-pages/mbbs-abroad/mbbs-abroad.module').then( m => m.MbbsAbroadPageModule)
  },
  {
    path: 'panel-discussion',
    loadChildren: () => import('./all-pages/panel-discussion/panel-discussion.module').then( m => m.PanelDiscussionPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./all-pages/notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'explore-exam',
    loadChildren: () => import('./all-pages/explore-exam/explore-exam.module').then( m => m.ExploreExamPageModule)
  },
  {
    path: 'explore-exam-details',
    loadChildren: () => import('./all-pages/explore-exam-details/explore-exam-details.module').then( m => m.ExploreExamDetailsPageModule)
  },
  {
    path: 'explore-exam-details-inner',
    loadChildren: () => import('./all-pages/explore-exam-details-inner/explore-exam-details-inner.module').then( m => m.ExploreExamDetailsInnerPageModule)
  },
  {
    path: 'country-info',
    loadChildren: () => import('./all-pages/country-info/country-info.module').then( m => m.CountryInfoPageModule)
  },
  {
    path: 'expert-counselling',
    loadChildren: () => import('./all-pages/expert-counselling/expert-counselling.module').then( m => m.ExpertCounsellingPageModule)
  },
  {
    path: 'education-loan-assistance',
    loadChildren: () => import('./all-pages/education-loan-assistance/education-loan-assistance.module').then( m => m.EducationLoanAssistancePageModule)
  },
  {
    path: 'scholarships',
    loadChildren: () => import('./all-pages/scholarships/scholarships.module').then( m => m.ScholarshipsPageModule)
  },
  {
    path: 'aboutus',
    loadChildren: () => import('./all-pages/aboutus/aboutus.module').then( m => m.AboutusPageModule)
  },
  {
    path: 'terms',
    loadChildren: () => import('./all-pages/terms/terms.module').then( m => m.TermsPageModule)
  },
  
  {
    path: 'refer-earn',
    loadChildren: () => import('./all-pages/refer-earn/refer-earn.module').then( m => m.ReferEarnPageModule)
  },
  {
    path: 'news-events',
    loadChildren: () => import('./all-pages/news-events/news-events.module').then( m => m.NewsEventsPageModule)
  },
  {
    path: 'news-events-inner',
    loadChildren: () => import('./all-pages/news-events-inner/news-events-inner.module').then( m => m.NewsEventsInnerPageModule)
  },
  {
    path: 'media',
    loadChildren: () => import('./all-pages/media/media.module').then( m => m.MediaPageModule)
  },
  {
    path: 'media-inner',
    loadChildren: () => import('./all-pages/media-inner/media-inner.module').then( m => m.MediaInnerPageModule)
  },
  {
    path: 'detailed-page-view',
    loadChildren: () => import('./all-pages/detailed-page-view/detailed-page-view.module').then( m => m.DetailedPageViewPageModule)
  },
  {
    path: 'course-application',
    loadChildren: () => import('./all-pages/course-application/course-application.module').then( m => m.CourseApplicationPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./all-pages/search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./all-pages/signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'signup-first-step',
    loadChildren: () => import('./all-pages/signup-first-step/signup-first-step.module').then( m => m.SignupFirstStepPageModule)
  },
  {
    path: 'signup-second-step',
    loadChildren: () => import('./all-pages/signup-second-page/signup-second-page.module').then( m => m.SignupSecondPagePageModule)
  },
  {
    path: 'before-login-aboutus',
    loadChildren: () => import('./all-pages/before-login-aboutus/before-login-aboutus.module').then( m => m.BeforeLoginAboutusPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./all-pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'institute-list',
    loadChildren: () => import('./all-pages/institute-list/institute-list.module').then( m => m.InstituteListPageModule)
  },
  {
    path: 'institute-list-details',
    loadChildren: () => import('./all-pages/institute-list-details/institute-list-details.module').then( m => m.InstituteListDetailsPageModule)
  },
  {
    path: 'photo-gallery',
    loadChildren: () => import('./all-pages/photo-gallery/photo-gallery.module').then( m => m.PhotoGalleryPageModule)
  },
  {
    path: 'courses',
    loadChildren: () => import('./all-pages/courses/courses.module').then( m => m.CoursesPageModule)
  },
  
  {
    path: 'institute-confirmation',
    loadChildren: () => import('./all-pages/institute-confirmation/institute-confirmation.module').then( m => m.InstituteConfirmationPageModule)
  },
  {
    path: 'otp',
    loadChildren: () => import('./all-pages/otp/otp.module').then( m => m.OtpPageModule)
  },
  
  
 

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
