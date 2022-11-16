
//
// StyleDictionaryColor.h
//

// Do not edit directly
// Generated on Wed, 16 Nov 2022 17:23:14 GMT


#import <UIKit/UIKit.h>

typedef NS_ENUM(NSInteger, StyleDictionaryColorName) {
PsBackground,
PsBackgroundHover,
PsBackgroundActive,
PsBorder,
PsBorderWeak,
PsBorderStrong,
PsSurface,
PsSurfaceWeak,
PsSurfaceMedium,
PsSurfaceStrong,
PsSurfaceInverse,
PsText,
PsTextWeak,
PsTextMedium,
PsTextStrong,
PsTextInverse,
PsActionBackground,
PsActionBackgroundHover,
PsActionBackgroundActive,
PsActionBackgroundWeak,
PsActionBackgroundWeakHover,
PsActionBackgroundWeakActive,
PsActionBorder,
PsActionBorderFocus,
PsActionNavigation,
PsActionNavigationHover,
PsActionNavigationVisited,
PsActionText,
PsActionTextWeak,
PsActionTextMedium,
PsActionTextInverse,
PsDangerBackground,
PsDangerBackgroundHover,
PsDangerBackgroundActive,
PsDangerBorder,
PsDangerSurface,
PsDangerText,
PsDangerTextWeak,
PsDangerTextMedium,
PsDangerTextInverse,
PsInfoBorder,
PsInfoSurface,
PsInfoText,
PsInfoTextWeak,
PsInfoTextMedium,
PsSuccessBorder,
PsSuccessSurface,
PsSuccessText,
PsSuccessTextWeak,
PsSuccessTextMedium,
PsWarningBorder,
PsWarningSurface,
PsWarningText,
PsWarningTextWeak,
PsWarningTextMedium
};

@interface StyleDictionaryColor : NSObject
+ (NSArray *)values;
+ (UIColor *)color:(StyleDictionaryColorName)color;
@end
