function []=tanh_RALUT()
    problem = FunctionApproximation.Problem('tanh');
    problem.InputTypes =  numerictype(1,8);
    problem.InputLowerBounds = -5;
    problem.InputUpperBounds = 5;
    problem.OutputType = numerictype(1,8,7);
    
    %Range Addressable Look Up Table
    %Optimization to be Range Addressable Look Up
    problem.Options.BreakpointSpecification='EvenPow2Spacing';
    problem.Options.WordLengths=8; %[8, 16, 32]
    problem.Options.Display=0;
    problem.Options.Interpolation = "Flat";
%     problem.Options.HDL-Optimized = 1;
    problem.Options.SaturateToOutputType = 1; %Whether to automatically saturate the range of the output of the function to approximate to the range of the output data type, specified as a numeric or logical 1 (true) or 0 (false).
%     problem.Options.UseParallel=1;
    problem.Options.OnCurveTableValues=0;

    solution = solve(problem);
    compare(solution);
    approximate(solution);
    memory = totalmemoryusage(solution);
    disp(memory);

end
